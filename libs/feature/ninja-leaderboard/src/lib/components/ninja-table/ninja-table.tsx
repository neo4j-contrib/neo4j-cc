import './ninja-table.module.scss';

import { pipe } from "@effect-ts/core/Function"
import * as L from "@effect-ts/monocle/Lens"
import * as A from "@effect-ts/core/Collections/Immutable/Array"
import * as S from "@effect-ts/core/Collections/Immutable/Set"
import { string as ordString } from "@effect-ts/core/Ord"
import { Equal as EqualString } from "@effect-ts/core/String"
import {parseISO, addDays} from "date-fns"
import { formatISODate } from '../../utils/dates';
import {NinjaStatus} from '../ninja-status/ninja-status';
import { LoadingMessage } from '../loading-message/loading-message';
import { Ninja, Weekly } from '../../model';

const ninjaWeekly = pipe(L.id<Ninja>(), L.prop("weekly"), L.asOptional)
const weeklyStarts = (w:Weekly) => Object.keys(w)

export interface NinjaTableProps {
  ninjas: Ninja[],
}

export function NinjaTable({ninjas}: NinjaTableProps) {

  const uniqueStarts = pipe(
    ninjas, // from all ninjas
    A.map(ninjaWeekly.getOption), // extract the possibly missing weekly
    A.compact, // drop any that were missing
    A.reduce([] as string[], (acc, w) => [...acc, ...weeklyStarts(w)]), // convert to array
    S.fromArray(EqualString), // de-duplicate
    S.toArray(ordString), // back to a sorted array
    A.map(parseISO)
  )

  const weeks = pipe(
    uniqueStarts,
    A.map( start => ({
      start:formatISODate(start), 
      end:formatISODate(addDays(start, 6))
    })
    )
  )

  return (
    <div>

{(ninjas.length === 0) 
      ? <LoadingMessage>Loading Ninjas...</LoadingMessage>
      : <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Categories</th>

            {weeks.map(week => (<th>{week.start}<br /><sub>{week.end}</sub></th>))}
          </tr>
        </thead>

        <tbody>

          {ninjas.map(ninja => {
            return <tr>
              <td key={ninja.user}>
                <h4>
                  <span>
                    {ninja.discourseUser}
                    <span>
                      <a href={"https://community.neo4j.com/u/" + ninja.user + "/summary"} rel="noopener noreferrer" target="_blank">{ninja.user}</a>
                    </span>
                  </span>
                </h4>
              </td>
              <td key={ninja.user + "_categories"}>
                <ol style={{fontSize:"0.75em"}}>
                  {ninja.categories.map( category => (
                    <li>
                      <code><a href={"https://community.neo4j.com/c/" + category.id} rel="noopener noreferrer" target="_blank">{category.name}</a></code>
                    </li>
                    ))}
                  
                </ol>
              </td>

              {weeks.map(week => {
                return <td>
                  <NinjaStatus ninja={ninja} activityCount={ninja.weekly[week.start] || 0} />
                </td>
              })}
            </tr>
          })}


          {ninjas.length === 0 &&
          <tr>
            <td colSpan={weeks.length + 1} >
              <p>

                Loading Ninjas

              </p>
            </td>
          </tr>
          }

        </tbody>
      </table>}


    </div>
  );
}

export default NinjaTable;

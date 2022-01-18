import './person-list.module.scss';

import { Person } from '@neo4j-cc/data-access/person'

import { RecordTable } from '@neo4j-cc/ui'
/* eslint-disable-next-line */
export interface PersonListProps {
  persons: Person[]
}

export function PersonList(props: PersonListProps) {

  return (
    <div>
      <RecordTable records={props.persons} />
    </div>
  );
}

export default PersonList;

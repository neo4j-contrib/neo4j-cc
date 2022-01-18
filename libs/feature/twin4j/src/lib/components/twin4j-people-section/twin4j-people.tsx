import { CommunityAvatar, CommunityUser } from '../../elements/community-avatar/community-avatar';
import './twin4j-people.module.scss';

export interface Twin4jPeopleProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  twin4j: any, 
  developers:CommunityUser[]
}



export const DevList: React.FC<{ developers: CommunityUser[] }> = ({ developers = [] }) => {

  return (
      <div id='devList' className="grid gap-2 grid-cols-3 grid-rows-2">
          {developers.map((user, i) => {
              return (
                  <div key={i} className="text-center p-2 self-center dark:hover:bg-gray-900 hover:shadow">
                      <CommunityAvatar user={user} size='L' named/>
                  </div>
              )
          })}
          <div className="text-center p-2 self-center dark:hover:bg-gray-900 hover:shadow" id="certified-button">
              <a href="https://neo4j.com/graphacademy/neo4j-certification/" target="_blank" rel="noreferrer">
                  <span>Certify Yourself</span>
              </a>
          </div>

      </div>
  )
}
export const Twin4jPeople = ({ twin4j, developers }:Twin4jPeopleProps) => {
  const featuredMember:{image:string} = twin4j.featuredCommunityMember;

  return (
      <section id="people" className="overflow-hidden dark:text-white dark:bg-gray-darkest">
          <div className="px-4 py-5 sm:p-6">

              <div className="grid gap-2 grid-cols-1 md:grid-cols-2">

                  <div className="" id="featuredDeveloper">

                      <h2 className="text-xl text-center mb-2">Featured Community Member</h2>


                      <a href={twin4j.url}>
                          <img
                              className='featured member dark:hover:bg-gray-900 hover:shadow p-2 w-3/4 mx-auto'
                              src={featuredMember.image} alt='' />
                      </a>
                  </div>


                  <div className="" id="newCertifiedDevelopers">
                      <h2 className="text-xl text-center mb-2">Newly Certified Developers</h2>
                      <div className="">
                          <DevList developers={developers} />
                      </div>
                  </div>

              </div>

          </div>
      </section>

  );}

export default Twin4jPeople;

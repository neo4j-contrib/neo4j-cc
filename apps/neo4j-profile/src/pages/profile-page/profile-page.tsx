import './profile-page.css';

import { usePersonsQuery, Person } from '@neo4j-cc/data-access-cc'


/* eslint-disable-next-line */
export interface ProfilePageProps {}

 

export function ProfilePage(props: ProfilePageProps) {

  const { loading, error, data } = usePersonsQuery();

  return (
    <div>
      <h1>ProfilePage</h1>
      
      <pre>{loading ? "loading" : "got it"}</pre>
      <pre>{(data) ? JSON.stringify(data) : "no data"}</pre>
      <pre>{(error) ? JSON.stringify(error) : "no error"}</pre>
    </div>
  );
}

export default ProfilePage;

import './feature-person.module.css';

import ReactJson from 'react-json-view';

import { usePersonsQuery } from '@neo4j-cc/data-access/person'

import { PersonList} from './components/person-list/person-list';

export const Debug = ({src}:{src:object}) => <ReactJson src={src}/>

/* eslint-disable-next-line */
export interface FeaturePersonProps {}

export function FeaturePerson(props: FeaturePersonProps) {
  const { loading, error, data } = usePersonsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <div>
    <p>Error </p>
    <Debug src={error}/>
  </div>

  return <PersonList persons={data?.persons || []} />
}

export default FeaturePerson;

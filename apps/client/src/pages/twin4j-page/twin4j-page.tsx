import './twin4j-page.module.scss';

import {FeatureTwin4j} from '@neo4j-cc/feature/twin4j';

/* eslint-disable-next-line */
export interface Twin4jPageProps {}

export function Twin4jPage(props: Twin4jPageProps) {
  return (<FeatureTwin4j communityGraph={{}}/>
  );
}

export default Twin4jPage;

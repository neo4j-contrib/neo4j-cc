import { render } from '@testing-library/react';

import Twin4jPeople from './twin4j-people';

import {data} from '../../../../data/twin4j.json';

const developers = data.topNewCertifiedDevelopers.map(d => d.developer);

describe('Twin4jPeople', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Twin4jPeople twin4j={data.thisWeekInNeo4j} developers={developers} />);
    expect(baseElement).toBeTruthy();
  });
});

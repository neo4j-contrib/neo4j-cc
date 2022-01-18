import { render } from '@testing-library/react';

import Twin4jArticles from './twin4j-articles-section';

import {data} from '../../../../data/twin4j.json';

describe('Twin4jArticles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Twin4jArticles topItems={data.thisWeekInNeo4j.topItems} />);
    expect(baseElement).toBeTruthy();
  });
});

import 'piral/polyfills';
import { renderInstance } from 'piral';
import { layout, errors } from './layout';

const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/neo4j-cc';

renderInstance({
  plugins:[],
  layout,
  errors,
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});

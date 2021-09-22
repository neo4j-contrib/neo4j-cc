import axios from 'axios';

import { promisify } from 'util'

const sleep = promisify(setTimeout)

let page = 1;
let hasNextPage = true;
// const discourseListUrl = "https://community.neo4j.com/directory_items.json";
const discourseListUrl = "https://community.neo4j.com/admin/users/list/active.json";
const maxPages = 500;

const writeOut = (s) => process.stdout.write(s);

const writeEach = (data) => data
	.forEach((item, i) => writeOut(`${JSON.stringify(item)}${(i < (data.length - 1)) ? ',' : ''}`));

const fetchFromDiscourse = async () => {
	writeOut('[');
	do {
		await sleep(3000).then(axios.get(discourseListUrl, {
			"params": {
				"page": page,
			},
			"headers": {
				"Api-Key": "b5a4d12699fe240f8b1559416a1f58c31488752905dc6da4e1bef1826648ef2f",
				"Api-Username": "abk"
			}
		})
			.then((response) => {
				if (response.data && response.data.length > 0) {
					writeEach(response.data);
					hasNextPage = ((response.data.length >= 100)  && (page < maxPages));
					if (hasNextPage) writeOut(',');
				}
			})
			.catch((err) => {
				console.error(err);
			})
		)
		page++;
	} while (hasNextPage)
	
	writeOut(']');
}

fetchFromDiscourse();


import axios from 'axios';

const { promisify } = require('util')
const sleep = promisify(setTimeout)


let page = 1;
let hasNextPage = true;
// const discourseListUrl = "https://community.neo4j.com/directory_items.json";
const discourseListUrl = "https://community.neo4j.com/admin/users/list/active.json";
const maxPages = 500;

const writeOut = (s: string) => process.stdout.write(s);

const writeEach = (data: any[]) => data
	// .map((item:any) => { item.username = item.user.username; return item;})
	.forEach((item: any, i: number) => writeOut(`${JSON.stringify(item)}${(i < (data.length - 1)) ? ',' : ''}`));

const fetchFromDiscourse = async () => {
	writeOut('[');
	do {
		await sleep(1000).then(axios.get(discourseListUrl, {
			"params": {
				"page": page,
			},
			"headers": {
				"Api-Key": "b5a4d12699fe240f8b1559416a1f58c31488752905dc6da4e1bef1826648ef2f",
				"Api-Username": "abk"
			}
		})
			.then((response) => {
				// hasNextPage = (/page=/.test(response.data.meta.load_more_directory_items) && (page < maxPages));
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


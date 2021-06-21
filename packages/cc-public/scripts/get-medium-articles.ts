
import axios, {AxiosResponse} from 'axios';

axios({
	"method": "GET",
	"url": "https://medium.com/tag/neo4j",
	"params": {
	},
	"headers": {
	}
}).then( (res:AxiosResponse) => {
	if (res.data) {
		const o = JSON.parse(res.data.slice(16,));
		console.log(o.payload);
	}
})
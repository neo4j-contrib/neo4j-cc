
import axios, {AxiosResponse} from 'axios';

axios({
	"method": "GET",
	"url": "https://dev.to/api/articles",
	"params": {
		"tag": "neo4j",
		"per_page": "100"
	},
	"headers": {
		"Api-Key": "5uuZGDab1hM5QHuTrLhRoq5b"
	}
}).then( (res:AxiosResponse) => {
	if (res.data) {
		console.log(JSON.stringify(res.data));
	}
})
import axios from 'axios';

const { promisify } = require('util')
const sleep = promisify(setTimeout)

const readline = require('readline');
const process = require('process');
const slugify = require('@sindresorhus/slugify');


// const discourseListUrl = "https://community.neo4j.com/directory_items.json";
const discourseUserUrl = "https://community.neo4j.com/users/";

const writeOut = (s: string) => process.stdout.write(s);

async function doit() {
	const peopleLines:string[] = [];
	console.error("Reading...");
	var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});
	rl.on('line', function(line:string){
		peopleLines.push(line);
	})
	rl.on('end', async function () {
		console.error("Writing...")
		await enrichPeople(JSON.parse(peopleLines.join(" ")))
		console.error("Done.");
		process.exit(0);
	})
}

const enrichPeople = async (people:any[]) => {
	const fullPeople = await people.map( async (person:any) => {
		const fullPerson = axios.get(`${discourseUserUrl}${slugify(person.username)}`, {
			"headers": {
				"Api-Key": "b5a4d12699fe240f8b1559416a1f58c31488752905dc6da4e1bef1826648ef2f",
				"Api-Username": "abk"
			}
		});
		return fullPerson;
	})
	writeOut(JSON.stringify(fullPeople))
}

doit();


import axios from 'axios';

const { promisify } = require('util')
const sleep = promisify(setTimeout)

const readline = require('readline');
const process = require('process');
const slugify = require('@sindresorhus/slugify');

require("dotenv").config({
  path: `.env.development`,
});

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
				"Api-Key": process.env.DISCOURSE_API_TOKEN,
				"Api-Username": process.env.DISCOURSE_API_USER
			}
		});
		return fullPerson;
	})
	writeOut(JSON.stringify(fullPeople))
}

doit();


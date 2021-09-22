
import { pipe } from "@effect-ts/core/Function"
import * as T from "@effect-ts/core/Effect";
import * as Async from "@effect-ts/core/Async";
import axios, { AxiosRequestConfig } from "axios";
// import fetch from 'cross-fetch';

export const defaultOrbitBaseUrl = "https://app.orbit.love/api/v1";

export interface OrbitHttp extends AxiosRequestConfig {
	base: string
	path: string
	bearer: string
}

/**
 * Assembles a call to Orbit.
 * 
 * @returns 
 */
const orbitGet = pipe(
	T.environment<OrbitHttp>(),
	T.chain( ({base,bearer,path}) => 
		T.fromAsync(Async.promise(
			() => axios.get(
				`${base}${path}`,
				{
					params: {
					},
					headers: {
						"Authorization": `Bearer ${bearer}`,
					}
			}), 
			(e) => `oops ${e}`)
		)
	)
)

export const fetchActivityTypes = pipe(
	orbitGet,
	T.provide({path:"/activity_types"})
)

export const fetchMe = () => axios(
	"https://app.orbit.love/api/v1/user",
	{
		headers: {
			Authorization: "Bearer ob_BtAnZLT6jxfbyAZumudP",
		}
	}
)


export const fetchWorkspaceActivities = () => axios({
	"method": "GET",
	"url": "https://app.orbit.love/api/v1/neo4j-community/activities",
	"params": {
		"activity_tags": "",
		"affiliation": "member",
		"member_tags": "",
		"orbit_level": "n",
		"type": "pull_requests:merged",
		"weight": "",
		"start_date": "",
		"end_date": "",
		"page": "",
		"direction": "ASC",
		"items": "10",
		"sort": "member"
	},
	"headers": {
		"Authorization": "Bearer ob_BtAnZLT6jxfbyAZumudP",
		"Cookie": "orbit_id=96aec6c8c81b793dada3f058448dbc1e; _orbit_session=bgifz1yPtR4DCttiCch1I6ubWt1h0jbaqiQAu4%2F3GeiNaUdZMSzpVhPw0AnXEYvEJMlsr%2FQkFWPvB1%2FAiPCpHJ74P2swxu10Pw6ScEMjWdFaTmnd0ru%2FySqgz8eGsi2K9%2FLe6EcKnZ1srxiHTYr8tYnlyz4raj2kl7GX7KvW5GZHh9g8sfBUszhs2YmUMHXhLFKDPJ46iXgvlMKw%2BbgBrfmXH8Hmt7tXW2MPUmeZtytnotH7SneCHfqwUVVSqLsNE7U%3D--1GOyzeurKzTd9ER1--vnC0jaaR8%2FzDLWoio1eeYQ%3D%3D"
	}
})

export const postIntegrationActivity = () => axios({
	"method": "POST",
	"url": "https://app.orbit.love/api/v1/neo4j-community/activities",
	"headers": {
		"Content-Type": "application/json",
		"Authorization": "Bearer ob_BtAnZLT6jxfbyAZumudP",
		"Cookie": "orbit_id=96aec6c8c81b793dada3f058448dbc1e; _orbit_session=bgifz1yPtR4DCttiCch1I6ubWt1h0jbaqiQAu4%2F3GeiNaUdZMSzpVhPw0AnXEYvEJMlsr%2FQkFWPvB1%2FAiPCpHJ74P2swxu10Pw6ScEMjWdFaTmnd0ru%2FySqgz8eGsi2K9%2FLe6EcKnZ1srxiHTYr8tYnlyz4raj2kl7GX7KvW5GZHh9g8sfBUszhs2YmUMHXhLFKDPJ46iXgvlMKw%2BbgBrfmXH8Hmt7tXW2MPUmeZtytnotH7SneCHfqwUVVSqLsNE7U%3D--1GOyzeurKzTd9ER1--vnC0jaaR8%2FzDLWoio1eeYQ%3D%3D"
	},
	"data": {
		"activity": {
			"weight": 0.1,
			"title": "Integration Debug",
			"activity_type": "debug:activity",
			"link": "https://community.neo4j.com",
			"key": "abk-2",
			"description": "integration debugging using Paw",
			"tags": [
				"debug"
			],
			"link_text": "Neo4j Community Forums"
		},
		"member": {
			"twitter": "akollegger",
			"email": "akollegger@gmail.com",
			"github": "akollegger"
		},
		"identity": {
			"name": "Andreas Kollegger",
			"username": "akollegger",
			"source": "devto"
		}
	}
})

export const fetchActivities = () => axios({
	"method": "GET",
	"url": "https://app.orbit.love/api/v1/neo4j-community/activities/",
	"headers": {
		"Authorization": "Bearer ob_BtAnZLT6jxfbyAZumudP",
		"Cookie": "orbit_id=96aec6c8c81b793dada3f058448dbc1e; _orbit_session=bgifz1yPtR4DCttiCch1I6ubWt1h0jbaqiQAu4%2F3GeiNaUdZMSzpVhPw0AnXEYvEJMlsr%2FQkFWPvB1%2FAiPCpHJ74P2swxu10Pw6ScEMjWdFaTmnd0ru%2FySqgz8eGsi2K9%2FLe6EcKnZ1srxiHTYr8tYnlyz4raj2kl7GX7KvW5GZHh9g8sfBUszhs2YmUMHXhLFKDPJ46iXgvlMKw%2BbgBrfmXH8Hmt7tXW2MPUmeZtytnotH7SneCHfqwUVVSqLsNE7U%3D--1GOyzeurKzTd9ER1--vnC0jaaR8%2FzDLWoio1eeYQ%3D%3D"
	}
})
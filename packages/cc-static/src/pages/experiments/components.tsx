import * as React from "react"

import { graphql } from "gatsby";
import millify  from 'millify';

import Layout from "components/SiteLayout";
import { ActivityStream } from "components/ActivityStream";
import { Card } from "components/Card";
import { ActivityCalendar } from "components/ActivityCalendar";
import { BigStats, BigStatsProps } from "components/BigStats";
// import { DataGlobe } from "components/DataGlobe";

import { range, flatten } from "fp-ts/lib/Array";

const sampleData = (year:number) => flatten(range(1,12).map( month => 
  range(1,30).map(dayOfMonth => 
    ({day:`${year}-${new String(month).padStart(2,'0')}-${new String(dayOfMonth).padStart(2,'0')}`, value: Math.floor(Math.random() * 100 )})
  )
))

const sampleStats:BigStatsProps = {
  headline:"Loved by developers worldwide",
  subhead:"",
  stats: [
    {
      label: "Registered Users",
      value: 42
    },
    {
      label: "Countries",
      value: 12
    },
    {
      label: "Projects",
      value: 80
    }
  ]
}

const ComponentShowPage:React.FC<{data:any}> = ({data}) => {

  sampleStats.stats[0].value = millify(data.allPeopleJson.edges.length, {
    precision: 1,
    lowercase: true
  });
  sampleStats.stats[1].value = data.allMeetupsJson.edges.length;
  sampleStats.stats[2].value = data.allProjectsJson.edges.length;

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-2">
        <Card title="Activity Stream">
          <ActivityStream />
        </Card>
        <Card title="Activity Calendar">
          <ActivityCalendar data={sampleData(2020)} />
        </Card>
        <Card title="Big Stats">
          <BigStats {...sampleStats} />
        </Card>
        {/* <Card title="Data Globe">
          <DataGlobe />
        </Card> */}
      </div>
    </Layout>
  )
}

export default ComponentShowPage

export const query = graphql`
query MeetupQuery {
  allMeetupsJson {
    edges {
      node {
        properties {
          country
        }
      }
    }
  }
  allPeopleJson {
    edges {
      node {
        name
      }
    }
  }
  allProjectsJson {
    edges {
      node {
        id
      }
    }
  }

}
`
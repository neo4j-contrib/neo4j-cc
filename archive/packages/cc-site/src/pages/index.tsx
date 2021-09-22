import * as React from "react";

import { graphql } from "gatsby";

import Layout from "../components/layout/SidebarLayout";
import { Twin4jArticles } from "../components/sections/Twin4jArticles";
import { Twin4jPeople } from "../components/sections/Twin4jPeople";
import { PopularBlogSection } from "../components/sections/PopularBlogs";
import { PopularProjects } from "../components/sections/PopularProjects";


const IndexPage: React.FC<{ data: any }> = ({ data }) => {
    const twin4j = data.cg.thisWeekInNeo4j;
    const topItems = twin4j.topItems;
    const developers = data.cg.topNewCertifiedDevelopers.map((d:any) => d.developer);
    const blogs = data.cg.topCommunityBlogsAndContent;
    const projects = data.cg.topCommunityOpenSourceProjects;

    return (
        <Layout>
            <section className="">
                <h2 id="twin4jHeadline" className="bold text-2xl text-center text-neo4j-darkBlue font-black pt-8 p-2">This Week in Neo4j &nbsp;<code>--&gt;</code>&nbsp; {twin4j.date}</h2>
                <Twin4jArticles topItems={topItems} />
            </section>
            <Twin4jPeople twin4j={twin4j} developers={developers}/>

            <section id="projects" className="overflow-hidden dark:text-white dark:bg-gray-darkest">
                <div className="px-4 py-5 sm:p-6">

                    <div className="grid grid-cols-1 md:grid-cols-2">

                        <PopularBlogSection blogs={blogs} />

                        <PopularProjects projects={projects} />

                    </div>

                </div>

            </section>

        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
  fragment ThisWeekInNeo4j on CommunityGraph {
    thisWeekInNeo4j {
            topItems {
            tag
            url
            }
            featuredCommunityMember{
                image
            }
            date
            url
            text
        }
  }
  query HomePageQuery {
    cg {
        ...ThisWeekInNeo4j              
        topNewCertifiedDevelopers(first:5) {
            developer {
                name
                screenName
                avatar
            }
        }

        topCommunityBlogsAndContent(first:5) { 
            title
            url
            author {
            name
            screenName
            avatar
            }
        }   

        topCommunityOpenSourceProjects(first:5) {
            title
            url
            description
            releaseDate
            language
            author {
            name
            screenName
            avatar
            }
        }
    }
  }
`;

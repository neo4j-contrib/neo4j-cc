import { PopularBlogSection } from './components/popular-blog-section/popular-blog-section';
import { PopularProjects } from './components/popular-projects-section/popular-projects';
import { Twin4jArticles } from './components/twin4j-articles-section/twin4j-articles-section';
import { Twin4jPeople } from './components/twin4j-people-section/twin4j-people';
import { CommunityUser } from './elements/community-avatar/community-avatar';

import './feature-twin4j.module.css';

/* eslint-disable-next-line */
export interface FeatureTwin4jProps {
    communityGraph: any
}

export function FeatureTwin4j({communityGraph}: FeatureTwin4jProps) {

  const twin4j = communityGraph.thisWeekInNeo4j;
  const topItems = twin4j.topItems;
  const developers:CommunityUser[] = communityGraph.topNewCertifiedDevelopers.map((d:{developer:CommunityUser}) => d.developer);
  const blogs = communityGraph.topCommunityBlogsAndContent;
  const projects = communityGraph.topCommunityOpenSourceProjects;


  return (
    <div id="twin4j-header">

    <div id="twin4j-features" >
        <section className="bg-neo4j-blue">
            <h2 id="twin4jHeadline" className="bold text-2xl text-center text-white p-2">This Week in Neo4j &nbsp;<code>--&gt;</code>&nbsp; {twin4j.date}</h2>
            <Twin4jArticles topItems={topItems} />
        </section>
        <Twin4jPeople twin4j={twin4j} developers={developers}/>

        <section id="projects" className="overflow-hidden shadow bg-white dark:text-white dark:bg-gray-darkest">
            <div className="px-4 py-5 sm:p-6">

                <div className="grid grid-cols-1 md:grid-cols-2">

                    <PopularBlogSection blogs={blogs} />

                    <PopularProjects projects={projects} />

                </div>

            </div>

        </section>
    </div>
</div>

  );
}

export default FeatureTwin4j;

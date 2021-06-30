import * as React from "react";
import { CommunityAvatar } from "../elements/CommunityAvatar";

export const DiscourseItem: React.FC<{user:any, title?:string, url?:string, tag?:string }> = ({user,title,url, tag}) => {
    const itemUrl = url || `https://community.neo4j.com/u/${user.name}`

    return (
        <div className="p-2 mr-4 flex flex-row dark:hover:bg-gray-900 hover:shadow">
            <div className="flex-initial">
                <CommunityAvatar user={user} />
            </div>
            {
                title ? (<div className="flex-grow">
                    <span>{title}</span>
                    </div>
                ) : null
            }
            {
                tag ? (<div className="flex-inital w-24 text-gray-400 text-right">
                    {tag}&nbsp;
                    </div>)
                    : null
            }
        </div>
    )
}

export const PopularProjects: React.FC<{projects:any[]}> = ({projects}) => {


    return (

        <div id="communityProjects">

        <h2 className="text-xl text-center mb-2">Popular Projects</h2>

        <div id="communityOpenSource" className="feature-list grid grid-cols-1 gap-4 mb-4">
            {
                projects.map((project, i) => 
                    (
                        <DiscourseItem key={i} user={project.author} title={project.title} tag={project.language}/>
                    )
                )
            }
        </div>

        <div className="buttons" id="projects-button">
            <a href="/c/projects-collaboration" className="btn btn-icon-text ember-view"><i
                    className="fa fa-commenting d-icon d-icon-commenting"></i>Find More Projects
                <code>--&gt;</code></a>
        </div>

        <div className="text-right" id="twin4j-button">
            <a href="https://neo4j.com/tag/twin4j/"
                className="inline-block p-2 m-2 text-xs rounded-full text-neo4j-darkBlue hover:text-white hover:bg-neo4j-darkBlue dark:hover:bg-blue-900 bg-opacity-10 hover:bg-opacity-60"
                target="_blank"><i className="fa fa-commenting d-icon d-icon-commenting"></i>See Previous Newsletters
                <code>--&gt;</code></a>
        </div>
    </div>
    )
}

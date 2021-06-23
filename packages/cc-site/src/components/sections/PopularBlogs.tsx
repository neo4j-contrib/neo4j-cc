import * as React from "react";
import { CommunityAvatar } from "../items/CommunityAvatar";

import { ExternalLink } from "./Twin4jArticles";

export const PopularBlogList: React.FC<{ blogs: any[] }> = ({ blogs = [] }) => {

    return (
        <div id="communityBlogs" className="feature-list grid grid-cols-1 gap-4 mb-4">
            {blogs.map(blog => {
                return (
                    <div className="p-2 mr-4 flex flex-row dark:hover:bg-gray-900 hover:shadow">
                        <div className="flex-initial ml-2">
                        {/* <DevAvatar user={blog.author} extraClasses="h-12 w-auto mr-2 shadow" /> */}
                        <CommunityAvatar user={blog.author} />
                      </div>
                      <div className="flex-grow">
                    
                    <ExternalLink title={blog.title} url={blog.url} />
                    </div>
                </div>
                )
            })}

        </div>
    )
}


export const PopularBlogSection: React.FC<{blogs:any[]}> = ({blogs}) => {

    return (
        <div id="communityContent">
            <h2 className="text-xl text-center mb-2">Popular Blogs</h2>

            <PopularBlogList blogs={blogs} />

            <div className="buttons" id="blogs-button">
                <a href="/c/community-content-blogs" className="btn btn-icon-text ember-view"><i
                    className="fa fa-commenting d-icon d-icon-commenting"></i>Discover More Blogs
                    <code>--&gt;</code></a>
            </div>
        </div>
    )
}

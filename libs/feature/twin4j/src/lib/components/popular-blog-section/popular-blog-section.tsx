import { CommunityAvatar } from '../../elements/community-avatar/community-avatar';
import ExternalLink from '../../elements/external-link/external-link';
import './popular-blog-section.module.scss';

/* eslint-disable-next-line */
export interface PopularBlogSectionProps {blogs: any[]}

export const PopularBlogList: React.FC<PopularBlogSectionProps> = ({ blogs = [] }) => {

  return (
      <div id="communityBlogs" className="feature-list grid grid-cols-1 gap-4 mb-4">
          {blogs.map((blog, i) => {
              return (
                  <div key={i} className="p-2 mr-4 flex flex-row dark:hover:bg-gray-900 hover:shadow">
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

export function PopularBlogSection({blogs}: PopularBlogSectionProps) {

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

export default PopularBlogSection;

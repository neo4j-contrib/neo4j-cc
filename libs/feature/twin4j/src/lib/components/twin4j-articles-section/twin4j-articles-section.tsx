import { ExternalLink } from '../../elements/external-link/external-link';
import './twin4j-articles.module.scss';

export interface Twin4jArticle {
  tag?: string;
  url: string;
}

export interface Twin4jArticlesProps { 
  topItems: Twin4jArticle[] 
}

export const Twin4jArticleTile:React.FC<{article:Twin4jArticle}> = ({article}) => {
    const titleWords = (article.tag || "Mystery topic").split(' ');
    const title = titleWords.length <= 10 ? titleWords.join(' ') :
        titleWords.slice(0, 10).join(' ') + " ...";
    return (<span className="bg-white dark:bg-neo4j-blue text-black dark:text-gray-200 text-center italic p-6 m-4 h-48 w-48 inline-flex items-center rounded-full shadow hover:shadow-xl hover:ring-4 ring-blue-800 dark:ring-blue-900"> 
        <ExternalLink title={title} url={article.url} />
        </span>)
}

export const Twin4jArticles: React.FC<Twin4jArticlesProps> = ({ topItems }) => {
  return (
    <section id="twin4j-articles"
        className="overflow-hidden">

        <div id="twin4jContainer" className="grid grid-cols-1 gap-4">

            <div className="weekly box grid grid-cols-2 md:grid-cols-5 items-center font-serif leading-16 text-l">
                {
                    topItems.map((topItem:Twin4jArticle,i:number) => (<Twin4jArticleTile key={i} article={topItem} />))
                }
            </div>
        </div>

        <div className="text-right" id="twin4j-button">
            <a href="https://neo4j.com/tag/twin4j/"
                className="inline-block p-2 m-2 text-xs rounded-full text-neo4j-darkBlue hover:text-white hover:bg-neo4j-darkBlue dark:hover:bg-blue-900 bg-opacity-10 hover:bg-opacity-60"
                target="_blank" rel="noreferrer">See Previous Newsletters
                <code>--&gt;</code></a>
        </div>
    </section>
  );
}

export default Twin4jArticles;

import * as React from "react";

export const CommunityNavigation: React.FC<{}> = () => {

  return (
    <section id="community-navigation">
        <nav className="bg-gray-900 w-full p-0 shadow-xl">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-12">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="w-full sm:block">
                            <div className="flex space-x-4">
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    href="https://community.neo4j.com/categories#jumpPoint"
                                    title="Categories">Discussions</a>
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    href="https://community.neo4j.com/search?q=status%3Anoreplies%20after%3A14%20-tags%3Aknowledge-base%20in%3Aunseen%20order%3Alatest"
                                    title="Help answering questions">Do you know the answer?</a>
                                <span className="flex-grow">&nbsp;</span>
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    href="https://neo4j.com/developer/get-started/" title="Developer Guides">Developer Guides</a>
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    href="https://neo4j.com/graphacademy/" title="Developer Guides">Graph Academy</a>
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    href="https://medium.com/neo4j/" title="Developer Blog">Developer Blog</a>
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    href="https://discord.com/invite/neo4j/" title="Neo4j Discord">Friendly Chat</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    </section>

  );
};



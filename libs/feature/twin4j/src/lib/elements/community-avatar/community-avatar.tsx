import './community-avatar.module.scss';

import * as React from "react";

export interface CommunityUser {
    screenName?: string,
    name?: string,
    avatar?: string
}

export interface CommunityAvatarProps {
    user: CommunityUser,
    named?: boolean,
    size?: 'S' | 'M' | 'L'
}

export const CommunityAvatar: React.FC<CommunityAvatarProps> = ({ user, named, size }) => {
    const userName = user.screenName || user.name || "";
    const profileUrl = `https://community.neo4j.com/u/${user.name}`
    const imgSizeClass = size === 'S' ? 'h-8' :
        size === 'L' ? 'h-14' :
        'h-12';
    
    const imgClasses= `avatar rounded-full mx-auto border border-gray-200 ${imgSizeClass} max-w-none`
    return (
        <div className="text-center mr-2">
        <a href={profileUrl}>
            <img alt={userName} className={imgClasses} src={user.avatar} />
            {named ? <span>{userName}</span> : null }
        </a>
        </div>
    );
}


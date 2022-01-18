import { render } from '@testing-library/react';

import {CommunityAvatar, CommunityUser} from './community-avatar';

const user:CommunityUser = {
  "name": "bratanic.tomaz",
  "screenName": "Bratanic Tomaz",
  "avatar": "https://community.neo4j.com/user_avatar/community.neo4j.com/bratanic.tomaz/50/7595_2.png"
}

describe('CommunityAvatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommunityAvatar user={user} />);
    expect(baseElement).toBeTruthy();
  });
});


import { NewDiscoursePost, NewDiscourseTopic } from './actions/create-post';

import { nanoid } from 'nanoid'
import { formatISO } from 'date-fns'

export const arbitraryTopic = (md?:string|undefined):NewDiscourseTopic => {
  const uuid = nanoid();
  return {
    title: `arbitrary topic ${uuid}`,
    raw: (md !== undefined) ?  (`${md}\n\n(uniquely ${nanoid()})`) : `# Unit testing with a live service\nThis is _not_ a best practice, but it is so convenient!\n- external_id: test-${uuid}`,
    category: 10,
    created_at: formatISO(new Date()),
    embed_url: `https://nowhere.com/just-a-test/${uuid}`,
    external_id: `test-${uuid}`,
    tags: ['test', 'delete-me']
  }
}

export const arbitraryPost = (topic_id:number):NewDiscoursePost => {
  // const uuid = nanoid();
  return {
    topic_id,
    raw: `a well considered reply to topic_id ${topic_id}`,
    created_at: formatISO(new Date())
  }
}
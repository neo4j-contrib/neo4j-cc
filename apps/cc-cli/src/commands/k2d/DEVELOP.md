

## Khoros to Discourse Map

CrossMap<Input, Intermediate, Output> = Tuple[Input, Intermediate, Output]

Conversation {
  topic: CrossMap<KhorosTopic, unknown, DiscourseTopic>,
  posts: CrossMap<KhorosPost, unknown, DiscoursePost>[]
}

1. allMessagesOnDay <== load messages from Khoros
2. 
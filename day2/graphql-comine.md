# Splicing graphql APIs

- How can you combine graphql APIs?
```graphql
type Thread {
  id: ID!
  authorID: ID!
}

type Author {
  id: ID!
  name: String!
}

// I want to do this
query {
  thread(id: 1) {
    author {
      name
    }
  }
}
```

- filter transform allows selecting entry points for a schema
- rename transforms
- and custom transforms!
- can combine with schema delegation


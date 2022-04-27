import './app.scss';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/react-hooks';

// import { Route, Link } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache()
})

export function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Admin</h1>
    </ApolloProvider>
  );
}

export default App;

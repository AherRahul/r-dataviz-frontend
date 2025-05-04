import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const httpUrl: string = import.meta.env.VITE_BASE_ENDPOINT || "http://localhost:5000/graphql";

const httpLink: ApolloLink = createHttpLink({
  uri: httpUrl,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

const cache: InMemoryCache = new InMemoryCache({
  addTypename: false
});

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

export { apolloClient };
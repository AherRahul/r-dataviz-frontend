import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const httpUrl: string = import.meta.env.VITE_BASE_ENDPOINT;

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
  cache,
  connectToDevTools: true
});

export { apolloClient };
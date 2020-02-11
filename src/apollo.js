import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { typeDefs, defaults, resolvers } from './clientState';

const cache = new InMemoryCache();

const stateLink = withClientState({
   cache,
   // ClientState 를 저장할 Cache(공간) 지정 필요
   typeDefs,
   defaults,
   resolvers
});

const client = new ApolloClient({
   cache,
   link: ApolloLink.from([stateLink])
   // HTTP 링크, Error 링크 etc.. 생성해야함
});

export default client;
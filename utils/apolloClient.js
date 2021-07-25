import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  }),
});

export default client;

import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const { IntrospectionFragmentMatcher } = require("apollo-cache-inmemory");
const introspectionResult = require("../fragmentTypes.json");

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
});

export const client = new ApolloClient({
  link: createUploadLink({ uri: "http://localhost:5000/graphql" }),
  cache: new InMemoryCache({
    addTypename: false,
    fragmentMatcher,
  }),
});

export const getItems = async (query, variables = {}) => {
  try {
    return await client.query({
      query: gql`
        ${query}
      `,
      variables,
      fetchPolicy: "no-cache",
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const setItems = async (query, variables) => {
  try {
    return await client.mutate({
      mutation: gql`
        ${query}
      `,
      variables,
      fetchPolicy: "no-cache",
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

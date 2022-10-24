import { getSdk } from "../../utils/prepr";
import { GraphQLClient } from "graphql-request";

export const PreprClient = getSdk(
  new GraphQLClient(
    "https://graphql.prepr.io/b2364a78a8cce8595e54235d5c7646751608edc27814ce4fb2b0ed9f8f1a6f48"
  )
);

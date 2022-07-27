import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  Observable,
} from "@apollo/client";
import { ComposeClient } from "@composedb/client";

// Path to the generated runtime composite definition
import { definition } from "../__generated__/definition.js";

const compose = new ComposeClient({
  ceramic: "http://localhost:7007",
  definition,
});

// Create a custom ApolloLink using the ComposeClient instance to execute operations
const link = new ApolloLink((operation) => {
  return new Observable((observer) => {
    compose.execute(operation.query, operation.variables).then(
      (result) => {
        observer.next(result);
        observer.complete();
      },
      (error) => {
        observer.error(error);
      }
    );
  });
});

// Use the created ApolloLink instance in your ApolloClient configuration
const client = new ApolloClient({ cache: new InMemoryCache(), link });

export default client;

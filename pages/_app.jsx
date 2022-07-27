import { ApolloProvider } from "@apollo/client";

import apolloClient from "../utils/apolloClient";

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;

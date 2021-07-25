import React from "react";
import "../styles/globals.css";
import ProtectRoute, { AuthProvider } from "../context/auth";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "../utils/apolloClient";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ProtectRoute>
          <Component {...pageProps} />
        </ProtectRoute>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;

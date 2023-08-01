import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Chakra Provider
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
// auto0 Provider
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
  <Auth0Provider
        domain="dev-fhmib4qotucw5aa6.us.auth0.com"
        clientId="gwzuPswAPATgJHbVIqp56IdZoh6S2uCF"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
          <App />
  </Auth0Provider>
        </ChakraProvider>
);


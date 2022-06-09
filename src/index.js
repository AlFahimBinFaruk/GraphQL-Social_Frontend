import React from "react";
import ReactDOM from "react-dom/client";
import firebase from "./firebase/config";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { AppAlertProvider } from "./contexts/alertContext";
import { UserAuthProvider } from "./contexts/userContext";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppAlertProvider>
      <ApolloProvider client={client}>
        <UserAuthProvider>
          <App />
        </UserAuthProvider>
      </ApolloProvider>
    </AppAlertProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

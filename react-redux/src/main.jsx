import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
// Provider is a component from react-redux that makes the Redux store
//  available to any nested components that need access to the Redux store.

import store from "./store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <Provider store={store}>:
This wraps the App component in the Provider component.
Provider takes a store prop, which is the Redux store we created.
This makes the Redux store available to all components in the App component tree. */}
  </React.StrictMode>
);

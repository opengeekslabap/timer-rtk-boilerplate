import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
if(rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}


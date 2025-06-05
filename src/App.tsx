import React from "react";
import SkipSizePage from "./pages/skipSizePage";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {

  return (
    <Provider store={store}>
      <SkipSizePage />;
    </Provider>
  );
}

import * as React from "react";
import { Provider } from "react-redux";
import "./App.css";
import AppContainer from "./components/AppContainer";
import { configureStore } from "./store/store";

const storeConfig = configureStore();
const store = storeConfig.store;

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <AppContainer title={"Hello There"} />
      </Provider>
    );
  }
}

export default App;

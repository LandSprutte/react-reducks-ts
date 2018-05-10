import './App.css';

import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppContainer from './components/AppContainer';
import { configureStore } from './store/store';

const storeConfig = configureStore();
const store = storeConfig.store;

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer title={'Hello There'} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

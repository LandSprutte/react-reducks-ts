import * as React from 'react';

import Header from './shared/Header';
import MainRouter from './shared/navigation/MainRouter';

interface IAppContainterProps {
  title: string;
}

interface IAppContainterState {
  description: string;
}

class AppContainer extends React.Component<
  IAppContainterProps,
  IAppContainterState
> {
  public render() {
    return (
      <>
        <Header />
        <MainRouter />;
      </>
    );
  }
}

export default AppContainer;

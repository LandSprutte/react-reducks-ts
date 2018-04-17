import * as React from 'react';

interface IAppContainterProps {
    title: string;
}

interface IAppContainterState {
    description: string;
}

class AppContainer extends React.Component<IAppContainterProps, IAppContainterState> {
    
    public render() {
        return(
            <div className="container">
                hello World
            </div>
        );
    }
}

export default AppContainer;
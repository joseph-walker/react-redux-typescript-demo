import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import CountDisplay from './../components/CountDisplay';
import IncrementButton from './../components/IncrementButton';
import IncrementByButton from './../components/IncrementByButton';
import actionCreators from './../data/actionCreators';
import { Model } from './../data/model';

// Props that can be passed directly to the App component
interface AppProps {
    //
}

// The props that are derived from the Redux model and ownProps in the connector
interface ConnectedState {
    count: number
}

// The props that are connected to the Redux dispatcher from the connector
interface ConnectedDispatch {
    increment: () => void,
    incrementBy: (amount: number) => void
}

class App extends React.Component<ConnectedState & ConnectedDispatch & AppProps, {}> {
    public render() {
        return (
            <div>
                <CountDisplay count={this.props.count} />
                <IncrementButton onIncrement={this.props.increment} />
                <IncrementByButton onIncrementBy={this.props.incrementBy} />
            </div>
        );
    }
}

function mapStateToProps(state: Model, ownProps: AppProps): ConnectedState {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps, actionCreators)(App);
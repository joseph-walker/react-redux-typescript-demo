import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Store, createStore } from 'redux';

import App from './containers/App';
import reducer from './data/reducer';
import { Model, initialState } from './data/model';

const store: Store<Model> = createStore(reducer, initialState);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
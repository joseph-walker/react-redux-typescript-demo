import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './containers/App';
import reducer from './data/reducer';
import Model from './data/model';

const store: Store<Model> = createStore(reducer, composeWithDevTools());

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
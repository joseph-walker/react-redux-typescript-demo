import * as Redux from 'redux';
import { MapDispatchToPropsObject } from 'react-redux';

import { Action, ActionType } from './actions';

const increment: Redux.ActionCreator<Action> = function increment(): Action {
    return {
        type: ActionType.Increment
    };
};

const incrementBy: Redux.ActionCreator<Action> = function incrementBy(amount: number): Action {
    return {
        type: ActionType.IncrementBy,
        amount: amount
    };
};

const actionCreators: MapDispatchToPropsObject = {
    increment,
    incrementBy
};

export default actionCreators;
import { Action, ActionType } from './actions';
import Model from './model';

const initialState: Model = {
    count: 0
};

export default function reducer(state: Model = initialState, action: Action): Model {
    switch (action.type) {
        case ActionType.Increment: {
            return {
                count: state.count + 1
            };
        }
        case ActionType.IncrementBy: {
            return {
                count: state.count + action.amount
            };
        }
    }

    return state;
};
import { createStore, Action as ReduxAction } from 'redux';

export enum ActionType {
    Increment,
    IncrementBy
}

export interface IncrementRecord extends ReduxAction {
    type: ActionType.Increment
}

export interface IncrementByRecord extends ReduxAction {
    type: ActionType.IncrementBy,
    amount: number
}

export type Action
    = IncrementRecord
    | IncrementByRecord

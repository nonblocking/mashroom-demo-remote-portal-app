
import type {Store as ReduxStore, Dispatch as ReduxDispatch, AnyAction} from 'redux';

export type ClientState = {
    joke: string | undefined | null;
    error: boolean;
}

export type Dispatch = ReduxDispatch<AnyAction>;

export type Store = ReduxStore<ClientState, AnyAction>;

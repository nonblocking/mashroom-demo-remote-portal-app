import {createStore} from 'redux';
import reducer from './reducer';
import type {Store} from '../../type-definitions';

let storeEnhancer: any = undefined;
if (process.env.NODE_ENV !== 'production') {
    storeEnhancer = (global as any).__REDUX_DEVTOOLS_EXTENSION__ && (global as any).__REDUX_DEVTOOLS_EXTENSION__();
}

const storeFactory: () => Store = () => createStore(reducer, undefined, storeEnhancer);

export default storeFactory;

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';


const middlewares = [thunk];

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
)

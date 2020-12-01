import { createBrowserHistory } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers';
import FetchInterceptor from './interceptors/fetch';

export const history = createBrowserHistory();

const historyRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(historyRouterMiddleware, thunkMiddleware);
  }

  return applyMiddleware(historyRouterMiddleware, thunkMiddleware, createLogger());
};

export const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  composeWithDevTools(
    FetchInterceptor,
    getMiddleware()
  )
);

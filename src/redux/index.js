import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  app: () => ({ appName: 'BuildBetter Starter' }),
});

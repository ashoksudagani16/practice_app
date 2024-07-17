import createStore from 'redux-zero';

export interface AppState {
  count: number;
}

const initialState: AppState = {
  count: 0
};

const store: any = createStore(initialState);

export default store;

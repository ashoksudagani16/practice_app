import { AppState } from './store';

export const increment = (state: AppState): Partial<AppState> => ({ count: state.count + 1 });
export const decrement = (state: AppState): Partial<AppState> => ({ count: state.count - 1 });
export const setAmount = (state: AppState, value: number): Partial<AppState> => ({ count: value });

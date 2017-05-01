import { createAction } from 'redux-actions';

// action.js
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const LOAD_RESULT = 'LOAD_RESULT';

// キー入力変更時
export const changeInput = createAction(CHANGE_INPUT);

// API結果取得時
export const loadResult = createAction(LOAD_RESULT);

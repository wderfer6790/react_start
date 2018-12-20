import { combineReducers } from 'redux';
import TimeReducer from './TimeReducer';
import TodoReducer from './TodoReducer';

/**
 * 해당 상태를 관리하는 리듀서를 매칭
 */
const RootReducer = combineReducers({
    currentTime : TimeReducer,
    todolist : TodoReducer
});

export default RootReducer;
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // 비동기처리를 미들웨어 레벨에서 하기위한 미들웨어
import RootReducer from "./RootReducer";

const Logger = (store) => {
    return (next) => {
        return (action) => {
            if (typeof(action) !== "function") {
                console.log("### action 실행 : ", JSON.stringify(action));
            }

            // console.log("===============================");
            // console.log("### state 전 : ", store.getState());
            next(action);
            // console.log("### state 후 : ", store.getState());
        }
    }
}

/* 
아래 형식과 같게 간소화 할 수도 있다.
const Logger = (store) => (next) => (action) => {
    console.log("### action 실행 : ", JSON.stringify(action));
    next(action);
} 
*/

const TodoStore = createStore(RootReducer, applyMiddleware(Logger, thunk));

export default TodoStore;

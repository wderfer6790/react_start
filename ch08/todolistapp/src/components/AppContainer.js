import App from "./App";
import TodoActionCreator from "../redux/TodoActionCreator";
import TimeActionCreator from "../redux/TimeActionCreator";
import { connect } from 'react-redux';

/**
 * AppContainer에 props로 전달한다.
 * 
 * @param {*} state 
 */
const mapState = (state) => {
    return {
        todolist : state.todolist,
        currentTime : state.currentTime
    }
}

/**
 * @param {*} dispatch connect 고차함수가 만든 함수가 전달됨
 */
const mapDispatcher = (dispatch) => {
    return {
        addTodo : (todo) => dispatch(TodoActionCreator.addTodo(todo)),
        deleteTodo : (no) => dispatch(TodoActionCreator.deleteTodo(no)),
        toggleDone : (no) => dispatch(TodoActionCreator.toggleDone(no)),
        changeTime : () => dispatch(TimeActionCreator.asyncChangeTime()) // dispach 값으로 함수가 올 경우 redux-chunk 가 확인하여 처리한다.
    }
}

const AppContainer = connect(mapState, mapDispatcher)(App);

export default AppContainer;
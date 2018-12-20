import Constant from '../Constant';

const TodoActionCreator = {
    addTodo : (todo) => {
        return {type : Constant.ADD_TODO, payload : {todo}};
    },
    deleteTodo : (no) => {
        return {type : Constant.DELETE_TODO, payload : {no}};
    } ,
    toggleDone : (no) => {
        return {type : Constant.TOGGLE_DONE, payload : {no}};
    }
}

export default TodoActionCreator
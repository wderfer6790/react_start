import Constant from "../Constant";
import produce from 'immer';

/**
 * reducer는 상태변경 외에 초기화도 한다. 
 * App 실행시 Store를 읽어들이면서 Reducer들이 실행된다. 초기 상태값.
 */
const initialState = {
    todolist : [
    { no:1, todo:"React 학습", done:false },
    { no:2, todo:"Redux 학습", done:false },
    { no:3, todo:"Bootstrap 살펴보기", done:true }
]};

const TodoReducer = (todolist = initialState.todolist, action) => {
    let index, newTodo, newTodolist;

    switch (action.type) {
        case Constant.ADD_TODO:
            newTodo = {
                no : new Date().getTime(),
                todo : action.payload.todo,
                done : false
            }

            newTodolist = produce(todolist, (draft) => {
                draft.push(newTodo);
            });

            return newTodolist;

        case Constant.DELETE_TODO:
            index = todolist.findIndex((todo) => todo.no === action.payload.no);
            newTodolist = produce(todolist, (draft) => {
                draft.splice(index, 1);
            });

            return newTodolist;
            
        case Constant.TOGGLE_DONE:
            index = todolist.findIndex((todo) => todo.no === action.payload.no);
            newTodolist = produce(todolist, (draft) => {
                draft[index].done = !draft[index].done;
            });

            return newTodolist;
            
        default:
            /**
             * reducer가 트리구조를 갖게 될 때 상태를 반환하지 않는 자식 reducer가 있으면 루트 reducer 가 반환하는 값에 누락이 생기기 때문에
             * 변경이 없더라도 반드시 상태값을 그대로 리턴한다.
             */
            return todolist;
    }
}

export default TodoReducer;
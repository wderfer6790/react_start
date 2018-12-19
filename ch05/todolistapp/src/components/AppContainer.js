import React, { Component } from 'react';
import produce from "immer";
import App from "./App";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'todolist' : [
                { no:1, todo:"React 학습", done:false },
                { no:2, todo:"Redux 학습", done:false },
                { no:3, todo:"Bootstrap 살펴보기", done:true }
            ]
        };
    }

    addTodo = (todo) => {
        let newTodo = {
            no : new Date().getTime(),
            todo : todo,
            done : false
        }

        let todolist2 = produce(this.state.todolist, (draft) => {
            draft.push(newTodo);
        });

        this.setState({todolist : todolist2});
    }

    deleteTodo = (no) => {
        let index = this.state.todolist.findIndex((todo) => todo.no === no);
        let todolist2 = produce(this.state.todolist, (draft) => {
            draft.splice(index, 1);
        });

        this.setState({todolist : todolist2});
    }

    toggleDone = (no) => {
        let index = this.state.todolist.findIndex((todo) => todo.no === no);
        let todolist2 = produce(this.state.todolist, (draft) => {
            draft[index].done = !draft[index].done;
        });

        this.setState({todolist : todolist2});
    }
    
    render() {
        return (
            <App todolist={this.state.todolist} addTodo={this.addTodo} deleteTodo={this.deleteTodo} toggleDone={this.toggleDone} />
        );
    }
}

export default AppContainer;
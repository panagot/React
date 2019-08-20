import React from 'react';

//workingon must enable buttons to remove tasks.
//also change parameters that will after return

class ToDoDynamic extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [
                {
                    id: 1,
                    description: "Get out of bed",
                    deadline: "2017-09-13",
                    done: false
                },
                {
                    id: 2,
                    description: "Brush teeth",
                    deadline: "2017-09-14",
                    done: false
                },
                {
                    id: 3,
                    description: "Eat breakfast",
                    deadline: "2017-09-15",
                    done: false
                }
              
            ]
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
    }


    addTodo(event){
        event.preventDefault();
        const addTodoItem = {
            id: this.state.todos,
            description: event.target.description.value,
            deadline: event.target.deadline.value,
            done: false
        }
        this.setState({todos: this.state.todos.concat(addTodoItem)})
    }

    removeTodo(index){
        const removeTodoItem = this.state.todos.filter(item => item.id !== index);
        this.setState({todos: removeTodoItem})
    }


    render() {
       
        return (
            <div>
                <div>
                <form onSubmit = {this.addTodo}>
                <input type="text" placeholder="Description" name="description"></input>
                <input type="date" placeholder="Deadline" name="deadline"></input>
                <input type="submit" value="Submit" ></input>
                </form>
                </div>
                {this.state.todos.map((todoList) =>
                <div className="todo-item" key={todoList.id}>
                <p> {todoList.description} / {todoList.deadline} </p>
                <button onClick={() => this.removeTodo(todoList.id)}>Remove</button>
                </div>
                )}
            </div>
        )
    }

}





    export default ToDoDynamic;

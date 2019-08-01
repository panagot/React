import React from 'react';

const todoList = [
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
];

function TodoItem(props) {
    return (
        <div className="todo-item">
        {props.status ? <p>ToDo: {props.item} / Deadline: {props.deadline}</p> : 
        <p style={{textDecoration: "line-through"}}>ToDo: {props.item} / Deadline: {props.deadline}</p>}
        </div>
    )
}

class DynamicList extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoList
        }
    }
    render() {
        const toDos = this.state.todos.map(item => <TodoItem key={item.id} item={item.description} deadline={item.deadline} status={item.done} />);
        return (
            <div >
                <p>{toDos}</p>
            </div>
        )
    }
}

export default DynamicList;
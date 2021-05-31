import React from 'react';
// import {useHistory} from 'react-router-dom';
import './Todo.css';
import del from '.././del.svg';
// import {useHistory} from 'react-router-dom'

function Todo({todos}) {
    // const history = useHistory();
    // console.log(history)
    const handleDelete = (id) => {
        fetch(`http://localhost:8000/todos/${id}`, {
            method: 'DELETE'
        })
        // .then(()=>window.location.reload())
    }

    return (
        <div className="todo-list">
            
            {todos.map((todo)=>{
                return (<div className="todo" key={todo.id}>
                    <h4>{todo.title}</h4>
                    <p>{todo.desc}</p>
                    <img src={del} alt="" onClick={() => handleDelete(todo.id)}/>
                </div>
                )
            })}
        </div>
    )
}

export default Todo

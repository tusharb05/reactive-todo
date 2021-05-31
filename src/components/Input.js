import React, {useState} from 'react';
import './Input.css'

function Input() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const todoItem = {title, desc}
        console.log(todoItem)
        fetch('http://localhost:8000/todos/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todoItem)
        })
    }
    return (
        <div>
            <form className="my-from" onSubmit={handleSubmit}>

                <input 
                    type="text" 
                    required
                    className="input-title" 
                    placeholder="Add your task.." 
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <input 
                    type="text" 
                    className="input-desc" 
                    placeholder="Description.." 
                    value={desc} 
                    onChange={(e)=>setDesc(e.target.value)}
                />
                <button className="btn">Add</button>
                
            </form>
        </div>
    )
}

export default Input

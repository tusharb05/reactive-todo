import React, {useState, useEffect} from 'react';
import Todo from './Todo';
import Input from './Input'

function Home() {
    const [isPending, setIsPending] = useState(true)

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
            setIsPending(false)
        }, 2000)
        
    }, [todos])

    // console.log(todos)

    return (
        <div>
            <Input/>
            {isPending && <img src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif" alt="Loading..."/>}
            
            {todos && <Todo todos={todos}/>}
        </div>
    )
}

export default Home

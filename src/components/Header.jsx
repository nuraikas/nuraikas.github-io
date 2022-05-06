import React, { useState, useEffect } from 'react';
import List from './List';
import {Context} from './Context'

function Header() {
    const getLocalStorage = () => JSON.parse(localStorage.getItem('todos')) || []

    const [todo, setTodo] = useState(getLocalStorage())
    const [inputData, setInputData] = useState('')
        

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo))
    }, [todo])

    const addTodo = () => {
        if(inputData){
            setTodo([
                ...todo,
                {
                data: inputData, 
                checked: false
                }
            ])
        }
        setInputData('')
    }

    const removeTodo = id => {
        setTodo(todo.filter((item, index) => index !== id))
    }

    const toggleTodo = id => {
        setTodo(todo.map((item, index) => index === id ? {...item, checked: !item.checked} : item))
    }
    return (
        <Context.Provider value={{
            removeTodo, toggleTodo
        }}>
        <div className="header">
            <h2>To Do</h2>
            <input 
                onChange={e => setInputData(e.target.value)} 
                value = {inputData} 
                type="text" 
                placeholder="Добавьте задачу" 
                onKeyPress={(event) => event.key !== "Enter" ? null : addTodo()}/>
            <button className="btn" onClick={addTodo}>Add</button>
        </div>
        <List todo = {todo}/>
        </Context.Provider>
    );
}

export default Header
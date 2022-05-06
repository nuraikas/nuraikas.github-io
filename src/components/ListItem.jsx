import React, {useContext} from 'react';
import {Context} from './Context'
import './styles/ListItem.css'

const ListItem = (props) =>{
    const {toggleTodo, removeTodo} = useContext(Context)
    console.log(props.checked)
    return (
        <div className="list_item">
            <title className={props.checked ? 'active' : null}>{props.data}</title>
            <button onClick={() => removeTodo(props.index)}>Delete</button>
            <button onClick={() => toggleTodo(props.index)}>Done</button>
        </div>
    );
}

export default ListItem
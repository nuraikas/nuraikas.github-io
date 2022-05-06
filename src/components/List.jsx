import React from 'react';
import ListItem from './ListItem'
import './styles/List.css'


const List = ({todo}) =>{
    return (
        <div className="list">
            {todo.map((item, index) => <ListItem 
            key = {index} 
            index = {index}
            data = {item.data}
            checked = {item.checked}
            />)}
        </div>
    );
}

export default List
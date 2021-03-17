import React, { useState } from 'react'
import TodoForm from './TodoForm'
import {GrClose} from 'react-icons/gr'
import {RiEdit2Fill} from 'react-icons/ri'

function Todo({todos,completeTodo, removeTodo,updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const SubmitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value:''
        })
    }

    if (edit.id){
        return <TodoForm edit= {edit} onSubmit={SubmitUpdate} />

    }
    return todos.map((todo, index) => (
        <div className={todo.isDone ? 'todo-fila done' : 'todo-fila'}
            key={index}>

            <div key={todo.id} onClick={() =>completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <GrClose
                onClick={()=>removeTodo(todo.id)}
                className='delete-icon' 
                />
                <RiEdit2Fill onClick={() =>setEdit({ id: todo.id, value: todo.text})}
                className='edit-icon'
                 />
            </div>


        </div>
    ));

}

export default Todo

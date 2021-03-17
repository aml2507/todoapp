import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value: '');

    const inputFocus = useRef(null)
    useEffect(() => {
        inputFocus.current.focus();
    });
    const changerHandler = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');

    };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? ( 
                <>
            <input type="text" placeholder="Update" value={input}
                name='text' className='todo-input edit'
                onChange={changerHandler}
                ref={inputFocus}
            />
            <button className="todo-button edit">Update</button>
            </>
            ) : 
            (
            <>     
            <input type="text" placeholder="Add a Todo!" value={input}
            name='text' className='todo-input'
            onChange={changerHandler}
            ref={inputFocus}
        />
        <button className="todo-button">Add ToDo</button>
        </>
        )}
        
        </form>
    );
}

export default TodoForm

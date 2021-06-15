import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTodo = props => {
    const addTodo = props.addTodoFunc;

    const [title, setTitle ] = useState('');

    const addTofoFormStyle = {
        display: 'flex'
    }

    const addTodoInputStyle = {
        flex: '10',
        padding: '5px'
    }

    const addTodoSummitStyle = {
        flex: '1'
    }

    const changeTitle = event => {
        setTitle(event.target.value)
      }

    const addSingleTodo = event => {
        event.preventDefault();
        if (title !== '') {
            addTodo(title)
        }
    }

    return (
        <form style={addTofoFormStyle} onSubmit={addSingleTodo}>
            <input 
                type="text" 
                name="title" 
                placeholder="thêm công việc" 
                style={addTodoInputStyle} 
                value={title}
                onChange={changeTitle}
            />
            <input 
                type="submit" 
                value="Thêm" 
                className="btn" 
                style={addTodoSummitStyle} 
            />
        </form>
    )
}

//PropTypes
AddTodo.propTypes = {
    addTodoFunc: PropTypes.func.isRequired
}

export default AddTodo

import React, {useState} from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import Form from './Form';

function Todo({todos, completeTodo, updateTodo, deleteTodo}){
  const [edit, setEdit] = useState({id: null, value: ''});

  const submitUpdate = value => {
    updateTodo(edit.id , value);
    setEdit({id: null, value: ''});
  }

  if(edit.id){
    return <Form edit={edit} onSubmit={submitUpdate}/>
  }
  
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete': 'todo-row'}
      key={index}>

      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <RiCloseCircleLine onClick={() => deleteTodo(todo.id)} className="delete-icon"/>

        <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} className="edit-icon"/>
        {/* on appel la fonctionavec une une fonction anomyme pour eviter qu'elle s'execute avant qu'on ne lui demande */}
      </div>

    </div>
  ))
}

export default Todo;

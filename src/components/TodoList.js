import React, {useState} from 'react';
import Form from './Form';
import Todo from './Todo';

function TodoList(){
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return;
    }

    const newTodo = [todo, ...todos];
    setTodo(newTodo);
  }

  const completeTodo = (id) => {
    let updateTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })
    setTodo(updateTodos);
  }

  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return;
    }
    setTodo(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }

  const deleteTodo = (id) => {
    const removtodo = [...todos].filter(todo =>todo.id !== id);
    setTodo(removtodo);
  }

  return(
    <>
      <h1>Que faire aujourd'hui?</h1>
      <Form onSubmit={addTodo}/>
      <Todo
        todos={todos} 
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}/>
    </>
  )
}

export default TodoList;
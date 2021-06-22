import React, {useRef, useState, useEffect} from 'react';

function Form(props){
  const [input, setInput] = useState(props.edit? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const handlesubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input
    });
    setInput('');
  }

  const handlechange = e => {
    setInput(e.target.value);
  }

  return(
    <>
      <form onSubmit={handlesubmit} className="todo-form">
        {props.edit ? (
          <div>
            <input 
              type="text" 
              onChange={handlechange}
              value={input}
              name='text'
              ref={inputRef}
              className="todo-input edit"/>
            <button 
              onClick={handlesubmit} 
              className="todo-button">
                Update
            </button>
          </div>
        ) : (
          <div>
            <input 
              type="text" 
              onChange={handlechange}
              placeholder="Add todo"
              name='text'
              ref={inputRef}
              className="todo-input"/>
            <button 
              onClick={handlesubmit} 
              className="todo-button">
                Add Todo
            </button>
          </div>
        )
      }
      </form>
    </>
  )
}

export default Form;
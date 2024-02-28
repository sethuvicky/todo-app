// Todo.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './Buttons';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm, editTodoDescription } from '../redux/actions';

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');

  const handleAddTodo = (text, description) => {
    
    dispatch(addTodo(text, description));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim(), newTodoDescription);
      setNewTodoText('');
      setNewTodoDescription('');
    }
  };

  const handleDescriptionChange = (id, newDescription) => {
    dispatch(editTodoDescription(id, newDescription));
  };

  return (
    <div className="container mt-4" >
      <div className="row align-items-center mb-4">
        <div className="col-sm"style={{marginTop:"5%"}}>
          <input
            id="addTodoInput"
            className="form-control mb-2 mb-sm-0"
            type="text"
            placeholder="Add Title"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <input
            className="form-control mb-2 mt-2"
            type="text"
            placeholder="Add Description (Optional)"
            value={newTodoDescription}
            onChange={(e) => setNewTodoDescription(e.target.value)}
          />
        </div>
        <div  className="col-auto">
          <button  
            className="btn btn-primary"
            onClick={handleAddTodoClick}
          >
            <BsPlus size={20} />
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <FilterButtons />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <TodoList handleDescriptionChange={handleDescriptionChange} />
        </div>
      </div>
    </div>
  );
};

export default Todo;

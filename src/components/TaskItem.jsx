import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, markCompleted, markIncomplete, editTodo, editTodoDescription } from '../redux/actions';
import { FaTrash, FaCheck, FaTimes, FaEdit, FaSave } from 'react-icons/fa';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleEdit = () => {
    dispatch(editTodo(index, editedText));
    dispatch(editTodoDescription(index, editedDescription));
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-center border-bottom py-2 gap-4">
      <div className="d-flex align-items-center">
        {isEditing ? (
          <>
            <input
              type="text"
              className="form-control mr-2"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </>
        ) : (
          <span className={`mr-4 ${todo.completed ? 'text-decoration-line-through text-secondary' : ''}`}>
             {todo.text} <br /><br />  {todo.description}
          </span>
        )}
      </div>
      <div className='d-flex gap-3 ml-8'>
        {!isEditing ? (
          <>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => dispatch(removeTodo(index))}
            >
              <FaTrash />
            </button>
            {!todo.completed ? (
              <button
                className="btn btn-sm btn-success"
                onClick={() => dispatch(markCompleted(index))}
              >
                <FaCheck />
              </button>
            ) : (
              <button
                className="btn btn-sm btn-warning"
                onClick={() => dispatch(markIncomplete(index))}
              >
                <FaTimes />
              </button>
            )}
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => setIsEditing(true)}
            >
              <FaEdit />
            </button>
          </>
        ) : (
          <button
            className="btn btn-sm btn-primary"
            onClick={handleEdit}
          >
            <FaSave />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos, markAllCompleted, clearCompleted } from '../redux/actions';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div style={{marginLeft:"57%"}} className="btn-group" role="group" aria-label="Filter buttons">
      <select style={{width:"150px"}}
        className="form-select btn btn-sm btn-outline-secondary"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">ALL</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      <button  style={{width:"200px"}}
        className="btn btn-sm btn-outline-secondary"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>

      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={() => dispatch(clearCompleted())}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default FilterButtons;

// actions.js
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
  EDIT_TODO,
  EDIT_DESCRIPTION,
  CLEAR_COMPLETED
} from './constants';

export const addTodo = (text, description = '') => ({
  type: ADD_TODO,
  payload: { text, description },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});

export const editTodo = (id, newText) => ({
  type: EDIT_TODO,
  payload: { id, newText },
});

export const editTodoDescription = (id, newDescription) => ({
  type: EDIT_DESCRIPTION,
  payload: { id, newDescription },
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});

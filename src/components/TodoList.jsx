import { useSelector } from "react-redux";
import TodoItem from "./TaskItem";
import 'bootstrap/dist/css/bootstrap.min.css';


const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      return matchesFilter
    });
  });

  console.log("Filtered Todos:", filteredTodos);

  return (
    <ul className="list-group" style={{marginTop:"5%"}}>
   
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;

import { useEffect, useState } from "react";
import { Todo } from "./types/Todo";
import TodoList from "./components/TodoList";
import classes from "./styles.module.css";
import { Box, Container } from "@mui/material";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const fetchTodoList = () => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data: { todos: Todo[] }) => {
        console.log(data);
        setTodoList(data.todos);
      });
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <h1>Todo App with Material UI</h1>
      {todoList.length > 0 ? (
        <TodoList todoList={todoList} />
      ) : (
        <div>Loading Todos...</div>
      )}
    </Box>
  );
}

export default App;

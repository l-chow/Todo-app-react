import { useEffect, useState } from "react";
import { Todo } from "./types/Todo";
import TodoList from "./components/TodoList";
import { Box } from "@mui/material";
import "./styles.css";
import * as Constants from "./constants";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTodoList = () => {
    fetch("https://dummyjson.com/todos?limit=3")
      .then((res) => res.json())
      .then((data: { todos: Todo[] }) => {
        console.log(data);
        setTodoList(
          data.todos.map((item) => {
            return {
              ...item,
              userId: Constants.CURRENT_USER_ID,
            };
          })
        );
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const updateTodoList = (item: Todo) => {
    setTodoList(
      todoList.map((todo) => {
        if (item.id == todo.id) {
          console.log(item);
          return {
            ...todo,
            completed: item.completed,
          };
        } else return todo;
      })
    );
  };

  const addToTodoList = (newItem: Todo) => {
    setTodoList([newItem, ...todoList]);
  };

  const deleteTodoItem = (item: Todo) => {
    setTodoList(todoList.filter((todo) => item.id != todo.id));
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="start"
      flexDirection="column"
    >
      <h1>Todo App with Material UI</h1>
      {!loading ? (
        <TodoList
          key="1"
          todoList={todoList}
          updateTodoList={updateTodoList}
          addToTodoList={addToTodoList}
          deleteTodoItem={deleteTodoItem}
        />
      ) : (
        <div>Loading Todos...</div>
      )}
    </Box>
  );
}

export default App;

import { useState } from "react";
import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";
import {
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  FormGroup,
  List,
  Switch,
} from "@mui/material";

type TodoProps = {
  todoList: Todo[];
  updateTodoList: (todo: Todo) => void;
};

const TodoList = ({ todoList, updateTodoList }: TodoProps) => {
  const [editableTodoList, setEditableTodoList] = useState(todoList);
  const [showCompleted, setShowCompleted] = useState(true);

  const handleCompletedToggleChange = () => {
    setShowCompleted(!showCompleted);

    if (!showCompleted) setEditableTodoList([...todoList]);
    else
      setEditableTodoList(
        todoList.filter((todo) => {
          return todo.completed == false;
        })
      );
  };

  return (
    <Card>
      <CardHeader
        title="List of Todos"
        action={
          <FormGroup>
            <FormControlLabel
              control={
                <Switch defaultChecked onChange={handleCompletedToggleChange} />
              }
              label="Show Completed"
            />
          </FormGroup>
        }
      ></CardHeader>
      <CardContent>
        <List>
          {editableTodoList.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todoItem={todo}
                updateList={updateTodoList}
              ></TodoItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default TodoList;

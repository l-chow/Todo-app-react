import React, { useState } from "react";
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
};

const TodoList = ({ todoList }: TodoProps) => {
  const [showCompleted, setShowCompleted] = useState(true);

  const handleCompletedToggleChange = () => {
    setShowCompleted(!showCompleted);
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
          {todoList.map((todo) => (
            <TodoItem todoItem={todo}></TodoItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TodoList;

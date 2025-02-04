import React, { useState } from "react";
import { Todo } from "../types/Todo";
import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

type TodoItemProps = {
  todoItem: Todo;
};

const TodoItem = ({ todoItem }: TodoItemProps) => {
  const [checkboxState, setCheckboxState] = useState(todoItem.completed);
  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState);
  };

  return (
    <ListItem key={todoItem.id}>
      <ListItemButton
        role={undefined}
        dense
        onClick={() => {
          handleCheckboxChange();
        }}
      >
        <ListItemIcon>
          <Checkbox edge="start" checked={checkboxState} />
        </ListItemIcon>
        <ListItemText primary={todoItem.todo} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;

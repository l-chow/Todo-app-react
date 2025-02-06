import React, { useState } from "react";
import { Todo } from "../types/Todo";
import {
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

type TodoItemProps = {
  todoItem: Todo;
  updateList: (todo: Todo) => void;
};

const TodoItem = ({ todoItem, updateList }: TodoItemProps) => {
  const [checkboxState, setCheckboxState] = useState(todoItem.completed);
  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState);
    updateList({ ...todoItem, completed: !checkboxState });
  };

  return (
    <ListItem>
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

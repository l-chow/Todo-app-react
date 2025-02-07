import { useState } from "react";
import { Todo } from "../types/Todo";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

type TodoItemProps = {
  todoItem: Todo;
  updateList: (todo: Todo) => void;
  deleteTodoItem: (todo: Todo) => void;
};

const TodoItem = ({ todoItem, updateList, deleteTodoItem }: TodoItemProps) => {
  const [checkboxState, setCheckboxState] = useState(todoItem.completed);
  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState);
    updateList({ ...todoItem, completed: !checkboxState });
  };

  const handleDeleteClicked = () => {
    deleteTodoItem(todoItem);
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={handleDeleteClicked}>
          <Delete></Delete>
        </IconButton>
      }
    >
      <ListItemButton
        role={undefined}
        dense
        onClick={() => {
          handleCheckboxChange();
        }}
      >
        <ListItemIcon>
          <Checkbox className="todo-item-checkbox" checked={checkboxState} />
        </ListItemIcon>
        <ListItemText primary={todoItem.todo} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;

import { ListItem, TextField } from "@mui/material";
import { useState } from "react";

type AddTodoItemProps = {
  addNewTodo: (text: string) => void;
  cancelAddTodo: () => void;
};

const AddTodoItem = ({ addNewTodo, cancelAddTodo }: AddTodoItemProps) => {
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddNewTodo = (text: string) => {
    addNewTodo(text);
  };

  const checkEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") handleAddNewTodo(newTodoText);
  };

  const handleInputBlur = () => {
    cancelAddTodo();
  };

  return (
    <ListItem>
      <TextField
        autoFocus
        fullWidth
        size="small"
        id="add-new-todo"
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          checkEnterPressed(e);
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewTodoText(e.target.value);
        }}
        onBlur={handleInputBlur}
        label="Add New Todo Item"
        helperText="Press Enter to confirm"
        value={newTodoText}
      />
    </ListItem>
  );
};

export default AddTodoItem;

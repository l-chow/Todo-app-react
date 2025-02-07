import { Lightbulb } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Todo } from "../types/Todo";

type GetRandomTodoProps = {
  addNewTodo: (text: string) => void;
};

const GetRandomTodo = ({ addNewTodo }: GetRandomTodoProps) => {
  const fetchRandomTodo = () => {
    fetch("https://dummyjson.com/todos/random")
      .then((res) => res.json())
      .then((data: Todo) => {
        addNewTodo(data.todo);
      });
  };

  return (
    <ListItem>
      <ListItemButton role={undefined} dense onClick={fetchRandomTodo}>
        <ListItemIcon>
          <Lightbulb></Lightbulb>
        </ListItemIcon>
        <ListItemText primary="Want a suggestion?"></ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default GetRandomTodo;

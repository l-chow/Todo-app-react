import { useState } from "react";
import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import AddTodoItem from "./AddTodoItem";
import GetRandomTodo from "./GetRandomTodo";
import * as Constants from "../constants";

// TODO: add way to delete tasks (+ all completed tasks at once)
//

type TodoProps = {
  todoList: Todo[];
  updateTodoList: (todo: Todo) => void;
  addToTodoList: (todo: Todo) => void;
  deleteTodoItem: (todo: Todo) => void;
};

const TodoList = ({
  todoList,
  updateTodoList,
  addToTodoList,
  deleteTodoItem,
}: TodoProps) => {
  //const [editableTodoList, setEditableTodoList] = useState(todoList);
  const [showCompleted, setShowCompleted] = useState(true);
  const [addingNewTask, setAddingNewTask] = useState(false);

  const handleCompletedToggleChange = () => {
    setShowCompleted(!showCompleted);
  };

  const handleAddNewTodo = (text: string) => {
    let newId =
      todoList.length > 0
        ? todoList
            .map((item) => item.id)
            .reduce((prev, curr) => {
              return curr > prev ? curr : prev;
            }) + 1
        : 1;
    let newTodo: Todo = {
      id: newId,
      todo: text,
      completed: false,
      userId: Constants.CURRENT_USER_ID,
    };
    addToTodoList(newTodo);
    setAddingNewTask(false);
  };

  const handleAddButtonClicked = () => {
    setAddingNewTask(true);
  };

  const cancelAddTodo = () => {
    setAddingNewTask(false);
  };

  return (
    <Card
      sx={{
        width: {
          xs: 1.0,
          sm: 0.75,
          lg: 0.5,
        },
      }}
    >
      <CardHeader
        title="List of Todos"
        action={
          <FormGroup row>
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
          {!addingNewTask ? (
            <ListItem>
              <ListItemButton
                role={undefined}
                dense
                onClick={handleAddButtonClicked}
              >
                <ListItemIcon>
                  <AddCircle></AddCircle>
                </ListItemIcon>
                <ListItemText primary="Add New Todo Item"></ListItemText>
              </ListItemButton>
            </ListItem>
          ) : (
            <AddTodoItem
              addNewTodo={handleAddNewTodo}
              cancelAddTodo={cancelAddTodo}
            ></AddTodoItem>
          )}

          <Divider></Divider>
          {showCompleted
            ? todoList.map((todo) => {
                return (
                  <TodoItem
                    key={todo.id}
                    todoItem={todo}
                    updateList={updateTodoList}
                    deleteTodoItem={deleteTodoItem}
                  ></TodoItem>
                );
              })
            : todoList
                .filter((todo) => {
                  return todo.completed == false;
                })
                .map((todo) => {
                  return (
                    <TodoItem
                      key={todo.id}
                      todoItem={todo}
                      updateList={updateTodoList}
                      deleteTodoItem={deleteTodoItem}
                    ></TodoItem>
                  );
                })}
          {todoList.filter((todo) => !todo.completed).length <= 0 ? (
            <GetRandomTodo addNewTodo={handleAddNewTodo}></GetRandomTodo>
          ) : (
            <></>
          )}
        </List>
      </CardContent>
    </Card>
  );
};

export default TodoList;

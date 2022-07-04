//import logo from './logo.svg';
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, description) => {
    // console.log("I am adding this new todo" , title , description)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    };
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    
      <Header title="Zains Todo List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
      
    </>
  );
}

export default App;

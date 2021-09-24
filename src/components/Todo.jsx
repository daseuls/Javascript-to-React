import React, { useState, useEffect } from "react"
import styled from "styled-components"
import TodoList from "./TodoList"

export default function Todo() {
  const [todos, setTodos] = useState([])
  const savedTodo = JSON.parse(localStorage.getItem("todolist"))

  useEffect(() => {
    if (savedTodo) {
      getLocalStorageTodos()
    }
  }, [])

  const getLocalStorageTodos = () => {
    console.log(savedTodo)
    setTodos(...todos, savedTodo)
  }

  const saveTodosInLocalStorage = () => {
    localStorage.setItem("todolist", JSON.stringify(todos))
  }

  const onSubmitTodo = (e) => {
    e.preventDefault()
    const inputValue = e.target.childNodes[0].value
    setTodos([...todos, inputValue])
    e.target.childNodes[0].value = ""
  }

  useEffect(() => {
    if (todos.length > 0) {
      saveTodosInLocalStorage()
    }
  }, [todos])

  console.log(todos)
  return (
    <>
      <TodoForm onSubmit={onSubmitTodo}>
        <TodoInput placeholder="오늘의 할일은 무엇인가요?🌱"></TodoInput>
      </TodoForm>
      {savedTodo && todos.map((todo) => <TodoList todolist={todo} />)}
    </>
  )
}

const TodoForm = styled.form``

const TodoInput = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid black;
  border-radius: 3px;
  margin: 10px;
`

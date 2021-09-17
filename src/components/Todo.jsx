import React, { useState } from "react"
import styled from "styled-components"
import TodoList from "./TodoList"

export default function Todo() {
  const [todos, setTodos] = useState([])
  const onSubmitTodo = (e) => {
    e.preventDefault()
    const inputValue = e.target.childNodes[0].value
    setTodos([...todos, inputValue])
    e.target.childNodes[0].value = ""
  }

  console.log(todos)
  return (
    <>
      <TodoForm onSubmit={onSubmitTodo}>
        <TodoInput placeholder="오늘의 할일은 무엇인가요?🌱"></TodoInput>
      </TodoForm>
      {todos.map((todo) => (
        <TodoList todolist={todo} />
      ))}
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

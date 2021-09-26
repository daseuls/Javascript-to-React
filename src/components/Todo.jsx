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

  useEffect(() => {
    saveTodosInLocalStorage()
  }, [todos])

  const getLocalStorageTodos = () => {
    setTodos(...todos, savedTodo)
  }

  const saveTodosInLocalStorage = () => {
    localStorage.setItem("todolist", JSON.stringify(todos))
  }

  const onSubmitTodo = (e) => {
    e.preventDefault()
    const inputValue = e.target.childNodes[0].value
    setTodos([...todos, { text: inputValue, id: Date.now() }])
    e.target.childNodes[0].value = ""
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((el) => el.id !== id))
  }

  return (
    <>
      <TodoForm onSubmit={onSubmitTodo}>
        <TodoInput placeholder="오늘의 할일은 무엇인가요?🌱"></TodoInput>
      </TodoForm>
      {
        // todos &&
        todos.map((todo) => (
          <TodoList
            onDelete={handleDeleteTodo}
            id={todo.id}
            todolist={todo.text}
          />
        ))
      }
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

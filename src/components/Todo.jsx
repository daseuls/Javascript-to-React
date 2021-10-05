import React, { useState, useEffect } from "react"
import styled from "styled-components"
import TodoList from "./TodoList"

export default function Todo() {
  const [todos, setTodos] = useState({ todo: [], filtered: [] })
  const savedTodo = JSON.parse(localStorage.getItem("todolist"))

  console.log("state값", todos)
  // console.log(savedTodo)
  // console.log("로컬스토리지값", savedTodo)

  // state todos가 변경될때 마다 로컬스토리지의 값을 todos로 변경시킨다...
  useEffect(() => {
    if (savedTodo) {
      getLocalStorageTodos()
    }
  }, [])

  useEffect(() => {
    saveTodosInLocalStorage()
  }, [todos])
  // 의존성 배열안에 [todos.todo]도 사용이 가능한가?

  // 저장된 로컬스토리지의 값을 state로 업데이트
  const getLocalStorageTodos = () => {
    setTodos({ todo: [...todos.todo, ...savedTodo] })
  }

  // state값을 로컬 스토리지에 저장하는 함수
  const saveTodosInLocalStorage = () => {
    localStorage.setItem("todolist", JSON.stringify(todos.todo))
  }

  // Todolist Submit 함수
  const onSubmitTodo = (e) => {
    e.preventDefault()
    const inputValue = e.target.childNodes[0].value
    setTodos({
      todo: [
        ...todos.todo,
        { text: inputValue, id: Date.now(), isCheckedInput: false },
      ],
      filtered: [
        ...todos.todo,
        { text: inputValue, id: Date.now(), isCheckedInput: false },
      ],
    })
    e.target.childNodes[0].value = ""
  }

  // Todolist 삭제 함수
  const handleDeleteTodo = (id) => {
    setTodos({ todo: todos.todo.filter((el) => el.id !== id) })
  }

  // Todolist check시에 체크한 todo값 boolean값으로 변경
  const handleCheckedTodo = (bool, id) => {
    setTodos({
      todo: [...todos.todo].map((element) => {
        if (element.id === id) {
          element.isCheckedInput = bool
        }
        return element
      }),
    })
  }

  // const handleFilteringComplete = () => {
  //   setTodos([...todos].filter((el) => el.isCheckedInput === true))
  // }

  return (
    <TodoContainer>
      <TodoForm onSubmit={onSubmitTodo}>
        <TodoInput placeholder="오늘의 할일은 무엇인가요?🌱"></TodoInput>
      </TodoForm>
      <TodoFilter>
        <TodoFilterName>All</TodoFilterName>
        <TodoFilterName>Ing</TodoFilterName>
        <TodoFilterName

        // onClick={handleFilteringComplete}
        >
          Complete
        </TodoFilterName>
      </TodoFilter>
      <TodoInputContainer>
        {todos.todo &&
          todos.todo.map((todo) => (
            <TodoList
              onDelete={handleDeleteTodo}
              id={todo.id}
              todolist={todo.text}
              isCheckedInput={todo.isCheckedInput}
              onCheck={handleCheckedTodo}
            />
          ))}
      </TodoInputContainer>
    </TodoContainer>
  )
}

const TodoContainer = styled.div`
  height: 35vh;
`
const TodoForm = styled.form``

const TodoInput = styled.input`
  padding: 10px;
  width: 300px;
  border-bottom: 2px solid white;
  border-radius: 3px;
  margin: 10px;
  color: black;
`
const TodoFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
const TodoFilterName = styled.button``
const TodoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`

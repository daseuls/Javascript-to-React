import React, { useState } from "react"
import styled from "styled-components"

export default function TodoList(props) {
  const [isCheckedInput, setIsCheckedInput] = useState(false)
  const deleteTodo = () => {
    const { onDelete, id } = props
    onDelete(id)
  }

  const test = (e) => {
    if (e.target.checked === true) {
      setIsCheckedInput(true)
    } else if (e.target.checked === false) {
      setIsCheckedInput(false)
    }
  }

  return (
    <Container>
      <Input onClick={test} type="checkbox" name="todo"></Input>
      <TodoText checked={isCheckedInput}>{props.todolist}</TodoText>
      <DeleteButton onClick={deleteTodo}>X</DeleteButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`
const TodoText = styled.li`
  background-color: ${(props) => (props.checked ? "gray" : "coral")};
  text-decoration: ${(props) => (props.checked ? "line-through" : "")};
  margin-right: 5px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  padding: 5px;
  border-radius: 3px;
  transition: all ease 0.2s;
`

const DeleteButton = styled.button`
  cursor: pointer;
  color: white;
`

const Input = styled.input`
  border: 1px solid black;
  margin-right: 5px;
  color: white;
  font-weight: 900;
  font-size: 20px;
`

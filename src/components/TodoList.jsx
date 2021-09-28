import React, { useState } from "react"
import styled from "styled-components"

export default function TodoList(props) {
  console.log(props.isCheckedInput)
  const deleteTodo = () => {
    const { onDelete, id } = props
    onDelete(id)
  }

  const test = (e) => {
    const { onCheck, id } = props
    if (e.target.checked === true) {
      onCheck(true, id)
    } else if (e.target.checked === false) {
      onCheck(false, id)
    }
  }

  return (
    <Container>
      <Input
        checked={props.isCheckedInput}
        onChange={test}
        type="checkbox"
        name="todo"
      ></Input>
      <TodoText checked={props.isCheckedInput}>{props.todolist}</TodoText>
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

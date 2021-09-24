import React from "react"
import styled from "styled-components"

export default function TodoList(props) {
  const deleteTodo = () => {
    const { onDelete, id } = props
    onDelete(id)
  }
  return (
    <Container>
      <TodoText>{props.todolist}</TodoText>
      <DeleteButton onClick={deleteTodo}>❌</DeleteButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`
const TodoText = styled.li`
  margin-right: 5px;
`

const DeleteButton = styled.button`
  cursor: pointer;
`

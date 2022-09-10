import React from 'react'
import TitleField from './TitleField'
import { SaveButton } from './SaveButton'
import { Typography, Modal } from '@mui/material'

const BoardModal = ({
  board,
  openModal,
  handleCloseModel,
  handleUpdateBoard,
  handleCreateBoard,
  mode,
}) => {
  const [name, setName] = React.useState(board ? board.name : '')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (board) {
      const updatedBoard = { ...board, name: name }
      handleUpdateBoard(updatedBoard)
    } else {
      const newBoard = { name: name }
      handleCreateBoard(newBoard)
      setName('')
    }

import * as React from 'react'
import DropdownMenu from '../DropdownMenu'
import BoardModal from '../modal/BoardModal'
import TaskModal from '../modal/TaskModal'
import Tasks from '../../containers/Tasks'
import {
  Grid,
  Typography,
  Box,
  Tooltip,
  IconButton,
  Button,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import AddIcon from '@mui/icons-material/Add'

const Board = ({
  board,
  boards,
  fetchProject,
  handleDeleteBoard,
  handleUpdateBoard,
  colors,
  mode,
}) => {
  const { name, id } = board
  const [tasks, setTasks] = React.useState([])

  React.useEffect(() => {
    setTasks(board.tasks)
  }, [board])

  //board menu to see more options
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(moreAnchorEl)

  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMoreAnchorEl(null)
  }
   // handle new task
   const handleCreateTask = (newTask) => {
    fetch('/api/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        board_id: id,
        completed: newTask.completed,
        description: newTask.description,
        due_date: newTask.due_date,
        name: newTask.name,
        priority: newTask.priority,
        status: newTask.status,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (tasks.length === 0) {
          setTasks([data])
        } else {
          setTasks((prevTasks) => {
            return [...prevTasks, data]
          })
        }
      })
  }

  //handle edit board modal
  const [openBoardModal, setOpenBoardModal] = React.useState(false)
  const handleOpenBoardModel = () => setOpenBoardModal(true)
  const handleCloseBoardModel = () => setOpenBoardModal(false)


  //handle create task modal
  const [openTaskModal, setOpenTaskModal] = React.useState(false)
  const handleOpenTaskModel = () => setOpenTaskModal(true)
  const handleCloseTaskModel = () => setOpenTaskModal(false)


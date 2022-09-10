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


import * as React from 'react'
import '../../css/project.css'
import { ProjectColors } from '../../helpers/ProjectColors'
import DropdownMenu from '../DropdownMenu'
import ProjectModal from '../modal/ProjectModal'
import { Link } from 'react-router-dom'
import LinearProgressWithLabel from './LinearProgressWithLabel'
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  IconButton,
  Grid,
  Tooltip,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'

//progress bar for task completion
const Project = ({
  project,
  mode,
  handleUpdatingProject,
  handleDeleteProject,
}) => {
    // handle progress bar
  const tasks = project.boards.map((board) => board.tasks).flat()

  const completedTasks = tasks.filter((task) => task.completed === true)
  const progress =
    completedTasks.length === 0
      ? 0
      : (completedTasks.length / tasks.length) * 100

  const currentColorScheme = ProjectColors(project)

  //menu to see more options
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(moreAnchorEl)

  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMoreAnchorEl(null)
  }
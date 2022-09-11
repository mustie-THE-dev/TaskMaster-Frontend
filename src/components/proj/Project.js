

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
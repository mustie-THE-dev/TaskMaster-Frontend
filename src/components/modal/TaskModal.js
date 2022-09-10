import React from 'react'
import { changeDate, changeDateToApiFormat } from '../../helpers/changeDate'
import { priorityColor, statusColor } from '../../helpers/taskTags'
import TitleField from './TitleField'
import { SaveButton } from './SaveButton'
import {
  Typography,
  Modal,
  TextField,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

const TaskModal = ({
  task,
  openModal,
  handleCloseModel,
  updateTask,
  handleCreateTask,
  mode,
  boards,
  currentBoardId,
}) => {
  const [name, setName] = React.useState(task ? task.name : '')
  const [boardId, setBoardId] = React.useState(currentBoardId)
  //change to input task date
  const [date, setDate] = React.useState(
    task ? changeDate(task.due_date) : Date.now()
  )
  const [status, setStatus] = React.useState(task ? task.status : 'Not Started')
  const [priority, setPriority] = React.useState(task ? task.priority : 'Low')
  const [description, setDescription] = React.useState(
    task ? task.description : ''
  )

  const status_options = [
    'Not Started',
    'In Progress',
    'Pending',
    'Changes Needed',
    'Complete',
  ]
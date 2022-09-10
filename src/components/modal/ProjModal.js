import * as React from 'react'
import '../../css/modal.css'
import { palette } from '../../theme/palette'
import TitleField from './TitleField'
import ColorPicker from './ColorPicker'
import { SaveButton } from './SaveButton'
import { Typography, Modal } from '@mui/material'

const ProjectModal = ({
  openModal,
  handleCloseModel,
  mode,
  project,
  postProjects,
  handleUpdatingProject,
}) => {
  const [title, setTitle] = React.useState(project ? project.title : '')
  const [color, setColor] = React.useState(project ? project.color : '')

  React.useEffect(() => {
    setTitle(project ? project.title : '')
    setColor(project ? project.color : '')
  }, [project])
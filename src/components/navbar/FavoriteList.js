import * as React from 'react'
import { Link } from 'react-router-dom'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

import Collapse from '@mui/material/Collapse'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Star from '@mui/icons-material/Star'
export const FavoritesList = ({ list }) => {
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
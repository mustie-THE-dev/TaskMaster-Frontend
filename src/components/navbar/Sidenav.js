import * as React from 'react'
import '../../css/sidenav.css'
import ProjectList from './Projectlist'
import FavoriteList from './FavoriteList'
import { Logo } from './Logo'
import { Link } from 'react-router-dom'
import { Typography, Toolbar, Divider } from '@mui/material'
import { Drawer } from '@mui/material'
import { useHistory } from 'react-router-dom'

const drawerWidth = 240


const Navigation = ({ projects, favorites, mode, fetchProjects }) => {
  let history = useHistory()
  const handleHomeClick = (event) => {
    history.push('/projects')
    fetchProjects()
  }

  
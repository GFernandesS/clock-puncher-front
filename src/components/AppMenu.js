import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core'
import { MenuOutlined, CloseOutlined } from '@material-ui/icons'
import './AppMenu.css'

const AppMenu = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="MenuButton"
        >
          <MenuOutlined />
        </IconButton>
        <Typography variant="h6">ClockPuncher</Typography>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          aria-controls="menu-appbar"
          className="MenuButton"
          style={{ paddingLeft: 30 }}
          startIcon={<CloseOutlined />}
        />
      </Toolbar>
    </AppBar>
  )
}

export { AppMenu }

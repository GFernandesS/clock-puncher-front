import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box
} from '@material-ui/core'
import {
  MenuOutlined,
  CloseOutlined,
  CropDinOutlined,
  MinimizeOutlined
} from '@material-ui/icons'
import './AppMenu.css'

const AppMenu = () => {
  const handleOnClickClose = (_) => {
    window.main.send('finalize')
  }

  return (
    <AppBar position="relative">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="Drag"
        >
          <MenuOutlined />
        </IconButton>
        <Typography variant="h6">ClockPuncher</Typography>
        <Box className="Drag MenuButtom" flexGrow={1}>
          <Button color="primary" variant="contained" size="small">
            <MinimizeOutlined />
          </Button>
          <Button color="primary" variant="contained" size="small">
            <CropDinOutlined />
          </Button>
          <Button
            color="secondary"
            variant="contained"
            size="small"
            onClick={handleOnClickClose}
          >
            <CloseOutlined />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export { AppMenu }

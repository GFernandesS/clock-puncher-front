import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer
} from '@material-ui/core'
import {
  MenuOutlined,
  CloseOutlined,
  CropDinOutlined,
  MinimizeOutlined
} from '@material-ui/icons'
import './AppMenu.css'

const AppMenu = () => {
  const [isMaximized, setIsMaximized] = useState(false)

  const [openDrawer, setOpenDrawer] = useState(false)

  const handleOnClickClose = (_) => {
    window.main.send('finalize')
  }

  const handleDrawerOnClickClose = () => setOpenDrawer(false)

  const handleOnClickMinimize = () => {
    window.main.send('minimize')
  }

  const handleOnClickMaximize = () => {
    isMaximized ? window.main.send('restore') : window.main.send('maximize')
    setIsMaximized((actualState) => !actualState)
  }

  return (
    <>
      <AppBar position="relative">
        <Toolbar variant="dense" className="Toolbar">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className="Drag"
            onClick={() => setOpenDrawer(true)}
          >
            <MenuOutlined />
          </IconButton>
          <Typography variant="h6">ClockPuncher</Typography>
          <Box className="Drag MenuButtom">
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={handleOnClickMinimize}
            >
              <MinimizeOutlined />
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={handleOnClickMaximize}
            >
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
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerOnClickClose}
      >
        <h2>Drawer legal</h2>
      </Drawer>
    </>
  )
}

export { AppMenu }

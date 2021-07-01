import React from 'react'
import { Button, Grid, Card } from '@material-ui/core'
import AlarmAddOutlinedIcon from '@material-ui/icons/AlarmAddOutlined'
import './Main.css'

export const Main = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="main"
    >
      <Grid item>
        <Button
          variant="contained"
          style={{ '-webkit-app-region': 'no-drag' }}
          color="primary"
          startIcon={<AlarmAddOutlinedIcon />}
          size="large"
        >
          Iniciar novo dia!
        </Button>
        <Card></Card>
      </Grid>
    </Grid>
  )
}

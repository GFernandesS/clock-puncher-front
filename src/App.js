import './App.css'
import { Container, Button, TextField } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container fixed>
        <TextField id="outlined-basic" label="Usuário" variant="outlined" />
        <Button variant="contained" color="primary">
          Default
        </Button>
      </Container>
    </div>
  )
}

export default App

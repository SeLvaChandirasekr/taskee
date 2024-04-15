
import {AppBar,Toolbar,Grid,Button} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import {useState} from "react"
import LoginModal from "./LoginModal";

export default function NavBar() {

  const [modalOpen,setModalOpen]=useState(false) 
  const [type ,setType]=useState("login")

  const handleLoginClick = () => {
    setModalOpen(true)
    setType("login")
  }

  const handleSignUpClick = () => {
    setModalOpen(true)
    setType("registration")

  }
  return (
    <div>
   <AppBar position="static">
    <Toolbar>
      <Grid container  style={{
        width: "1110px" ,
        margin: "0 auto"
        }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        >
        <Grid item><HomeIcon/></Grid>
        <Grid item>Add Task</Grid>
        <Grid item>All the Task</Grid>
        <Grid item>Completed Task</Grid>
        <Grid item>Pending Task</Grid>
        <Grid item>
        <Button variant="contained" onClick={handleLoginClick}> login </Button>
        <Button variant="contained" onClick={handleSignUpClick}>Signup</Button>
        </Grid>

      </Grid>
    </Toolbar>
   </AppBar>
   <LoginModal 
   type={type}
    modalOpen={modalOpen} 
    setModalOpen={setModalOpen}/>
   </div>
  )
}

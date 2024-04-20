
import {AppBar,Toolbar,Grid,Button} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import {useState} from "react"
import LoginModal from "./LoginModal";
import TaskManager from "./TaskManager"; // Import TaskManager component


export default function NavBar() {

  const [modalOpen,setModalOpen]=useState(false) 
  const [type ,setType]=useState("login")

  
const username =localStorage.getItem("username")

  const handleLoginClick = () => {
    setModalOpen(true)
    setType("login")
  }

  const handleSignUpClick = () => {
    setModalOpen(true)
    setType("registration")

  }

  const handleLogout = () => {
    localStorage.setItem("username","")
    window.location.reload()
  }
  return (
    <div>
   <AppBar position="static">
    <Toolbar>
      <Grid container  style={{
        width: "1300px" ,
        margin: "0 auto"
        }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        >
        <Grid item><HomeIcon/></Grid>
       
        <Grid item>
          { username ? (<Button variant="contained" onClick={handleLogout} style={{ marginRight: "2px", padding: "2px" }}> logout </Button>) : 
         ( <>
           <Button variant="contained" onClick={handleLoginClick}  style={{ marginRight: "2px", padding: "2px" }} > login </Button>
            <Button variant="contained" onClick={handleSignUpClick}  style={{ marginRight: "2px", padding: "2px" }}>Signup</Button>
          </> )

          }
       
        </Grid>

      </Grid>
    </Toolbar>
   </AppBar>
   <LoginModal 
   type={type}
    modalOpen={modalOpen} 
    setModalOpen={setModalOpen}/>
   <Grid container spacing={2} sx={{ height: "80vh", backgroundColor: '#f0f0f0' }}>
      
      <Grid item xs={12} sx={{ height: "80%" }}>
        <TaskManager  username={username} />
      </Grid>
   
  </Grid>
   </div>
  )
}
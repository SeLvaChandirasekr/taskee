import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types'

import { handleLoginApi,handleRegistrationApi } from './api';


export default function LoginModal( {
    modalOpen = false, 
    setModalOpen= ()=> {},
    type="login",
}) {

    // open and setOpen will change as props
  //const [open, setOpen] = React.useState(false);
    const [formValue,setFormValue]=React.useState({
        username:"",
        password:"",
        confirmpassword:"",
        phonenumber:"",
        email:""
    })


const handleUserLogin = (username) => {
localStorage.setItem('username',username)
}
  return (
    <React.Fragment>
      
      <Dialog
        open={modalOpen}
        onClose={()=> {
            setModalOpen(false)
        }}
        PaperProps={{
          component: 'form',
          onSubmit: async (event) => {
            event.preventDefault();

            if(type === "login") {
       const response= await handleLoginApi(formValue)
       console.log(response.data,'response')
       if(response.data) handleUserLogin(response.data)
            } else {
              const response= await handleRegistrationApi(formValue)
              console.log(response.data,'response')   
             {/* if(response.data) handleUserLogin(response.data)*/} 
            }      
            setModalOpen(false)
          },
        }}
      >
        {/* contents for Login Form  */}
        <DialogTitle>{type === "login" ? "Login" : "Registration" }</DialogTitle>
        <DialogContent style={{width: 500}}>
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="username"
            name="username"
            label="username"
            type="txt"
            fullWidth
            variant="standard"
            onChange={(event)=>{
                setFormValue({
                    ...formValue,
                    username: event.target.value
                })
            }}
          />
        
    
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="password"
            type="txt"
            fullWidth
            variant="standard"
            onChange={(event)=>{
                setFormValue({
                    ...formValue,
                    password: event.target.value
                })

            }}
          />
      
{/* contents for Registration form */}
{!(type === "login") && (
  <>

          
          <TextField
            autoFocus
            required
            margin="dense"
            id="confirmpassword"
            name="confirmpassword"
            label="confirm password"
            type="txt"
            fullWidth
            variant="standard"
            onChange={(event)=>{
                setFormValue({
                    ...formValue,
                    confirmpassword: event.target.value
                })

            }}
          />
      
      
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="phonenumber"
            name="phonenumber"
            label="Phone Number"
            type="number"
            fullWidth
            variant="standard"
            onChange={(event)=>{
                setFormValue({
                    ...formValue,
                    phonenumber: event.target.value
                })

            }}
          />
       
       
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="txt"
            fullWidth
            variant="standard"
            onChange={(event)=>{
                setFormValue({
                    ...formValue,
                    email: event.target.value
                })

            }}
          />
        
        </>
     )}  
</DialogContent>

        <DialogActions>
          <Button onClick={()=>{
            setModalOpen(false)
          }}>Cancel</Button>
          <Button type="submit">{type === "login" ? "Login" : "Registration" }</Button>
        </DialogActions>

      </Dialog>
    </React.Fragment>
  );
}

LoginModal.propTypes = {
  modalOpen: PropTypes.bool, // Prop type for modalOpen
  setModalOpen: PropTypes.func, // Prop type for setModalOpen
  type: PropTypes.string, // Prop type for type
};
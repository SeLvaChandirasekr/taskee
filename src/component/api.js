import axios from 'axios'
const API_URL = 'https://taskee-node-be.onrender.com/api/tasks';

export const handleLoginApi = ({
    username="",
    password=""
})=> {

   return  axios.post("https://taskee-node-be.onrender.com/login" ,{
    username,
    password
   })
} 
export const handleRegistrationApi = ({
    username="",
    password="",
    phonenumber="",
    email=""
})=> {
   return  axios.post("https://taskee-node-be.onrender.com/registration", {
    username,
    password,
    phonenumber,
    email
   })
} 


export const handleSubmittedTaskApi = ({
    heading="",
    description="",
    priority="",
    deadline=""
})=> {
   return  axios.post("https://taskee-node-be.onrender.com/api/tasks", {
    heading,
    description,
    priority,
    deadline
   })
} 

export const getAllTasks = () => {
    return axios.get(API_URL);
};

export const createTask = (taskData) => {
    return axios.post(API_URL, taskData);
};

export const getTaskById = (taskId) => {
    return axios.get(`${API_URL}/${taskId}`);
};

export const updateTask = (taskId, taskData) => {
    return axios.patch(`${API_URL}/${taskId}`, taskData);
};

export const deleteTask = (taskId) => {
    return axios.delete(`${API_URL}/${taskId}`);
};
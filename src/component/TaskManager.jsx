import { useState } from "react";
import { Modal, Card, Button, Typography, TextField, Box, Grid, Backdrop } from "@mui/material";
import PropTypes from 'prop-types';
import { handleSubmittedTaskApi } from './api';

const TaskManager = ({ username }) => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [taskData, setTaskData] = useState({
    heading: "",
    description: "",
    priority: "",
    deadline: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingIndex(null);
    setTaskData({
      heading: "",
      description: "",
      priority: "",
      deadline: "",
    });
  };

  const handleSubmit = () => {
    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = taskData;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, taskData]);
    }
    // Call API to submit task
    handleSubmittedTaskApi(taskData)
      .then(response => {
        // Handle success if needed
        console.log("Task submitted successfully:", response);
      })
      .catch(error => {
        // Handle error if needed
        console.error("Error submitting task:", error);
      });
    handleClose();
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setTaskData(tasks[index]);
    setOpen(true);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  return (
    <div>
      {username && (
        <Button onClick={handleOpen} variant="contained" color="primary">
          Add Task
        </Button>
      )}

      <Modal open={open} onClose={handleClose} BackdropComponent={Backdrop} BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}>
        <Box sx={{ position: "center", backgroundColor: "white", p: 4, borderRadius: 4, maxWidth: 400, margin: "auto" }}>
          <Typography variant="h5" gutterBottom>{editingIndex !== null ? "Edit Task" : "Add Task"}</Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Task Heading"
            value={taskData.heading}
            onChange={(e) => setTaskData({ ...taskData, heading: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Task Description"
            value={taskData.description}
            onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Priority"
            value={taskData.priority}
            onChange={(e) => setTaskData({ ...taskData, priority: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            label=""
            type="date"
            value={taskData.deadline}
            onChange={(e) => setTaskData({ ...taskData, deadline: e.target.value })}
          />
          <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
        </Box>
      </Modal>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {tasks.map((task, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Card style={{ backgroundColor: task.completed ? "lightgreen" : "#ffeb3b", height: "100%", minHeight: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <Typography variant="h6">{task.heading}</Typography>
                <Typography>{task.description}</Typography>
                <Typography>Priority: {task.priority}</Typography>
                <Typography>Deadline: {task.deadline}</Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px" }}>
                <Button onClick={() => handleEdit(index)} variant="outlined" color="primary" sx={{ width: 'calc(33.33% - 8px)' }}>Edit</Button>
                <Button onClick={() => handleDelete(index)} variant="outlined" color="secondary" sx={{ width: 'calc(33.33% - 8px)' }}>Delete</Button>
                {!task.completed && <Button onClick={() => handleComplete(index)} variant="outlined" color="primary" sx={{ width: 'calc(33.33% - 8px)' }}>Mark as Completed</Button>}
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

TaskManager.propTypes = {
  username: PropTypes.string, // Add prop type validation for username
};

export default TaskManager;

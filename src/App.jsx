
import { Grid } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";

function App() {
  return (
    <Grid container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          {/* Add other routes here */}
        </Routes>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
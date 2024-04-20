import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography align="center" variant="subtitle1">
              All Rights Reserved 2024
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

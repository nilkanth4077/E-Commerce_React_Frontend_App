import React from "react";
import { Grid, Typography, Button, Stack } from "@mui/material";

export const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ backgroundColor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Stack direction="column" spacing={1} className="pb-5">
            <Button variant="text">About</Button>
            <Button variant="text">Blog</Button>
            <Button variant="text">Partners</Button>
            <Button variant="text">Jobs</Button>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Stack direction="column" spacing={1} className="pb-5">
            <Button variant="text">About</Button>
            <Button variant="text">Blog</Button>
            <Button variant="text">Partners</Button>
            <Button variant="text">Jobs</Button>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Stack direction="column" spacing={1} className="pb-5">
            <Button variant="text">About</Button>
            <Button variant="text">Blog</Button>
            <Button variant="text">Partners</Button>
            <Button variant="text">Jobs</Button>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Stack direction="column" spacing={1} className="pb-5">
            <Button variant="text">About</Button>
            <Button variant="text">Blog</Button>
            <Button variant="text">Partners</Button>
            <Button variant="text">Jobs</Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

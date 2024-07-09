import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

export const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, backgroundColor: "#9155fd" }}
            >
              N
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Nilkanth</p>
              <p className="opacity-70">April 5, 2022</p>
            </div>
          </div>
          <Rating value={2.5} name="half-rating" readOnly precision={0.5}></Rating>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

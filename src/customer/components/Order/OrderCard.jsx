import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="p-5 shadow-md hover:shadow-2xl"
      onClick={() => navigate(`/account/order/${6}`)}
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              src="/public/img/k1.png"
              alt=""
              className="w-[5rem] h-[5rem] object-cover object-top"
            />
            <div className="ml-5 space-y-2">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing
              </p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹499</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "20px", height: "20px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on March 03</span>
              </p>
              <p className="text-sm">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivered on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;

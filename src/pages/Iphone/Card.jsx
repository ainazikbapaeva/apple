import React from "react";
import { Box, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import carde from "../../image/card-removebg-preview.png";
import telefon from "../../image/telefon-removebg-preview.png";

const Card = () => {
  return (
    <Box className="container">
      <Box sx={{ display: "flex", gap: "80px" }}>
        <Box className="carde_center">
          <Typography variant="h2">
            <AppleIcon sx={{ fontSize: "50px" }} />
            Card
          </Typography>
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Get up to 3% Daily Cash back <br />
            with every purchase.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "50px",
              mt: "8px",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "blue",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "3px",
                fontSize: "23px",
              }}
            >
              Learn more
              <ArrowForwardIosIcon sx={{ fontSize: "18px" }} />
            </Typography>
            <Typography
              sx={{
                color: "blue",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "3px",
                fontSize: "23px",
              }}
            >
              Buy
              <ArrowForwardIosIcon sx={{ fontSize: "18px" }} />
            </Typography>
          </Box>
          <img
            style={{
              width: "900px",
              height: "500px",
            }}
            src={carde}
            alt=""
          />
        </Box>

        <Box className="carde_center">
          <Typography variant="h3">
            <AppleIcon sx={{ fontSize: "40px" }} />
            Trade In
          </Typography>
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Get $180-$630 in credit when <br />
            you trade in iPhone 11 or hinger.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "50px",
              mt: "8px",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "blue",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "3px",
                fontSize: "23px",
              }}
            >
              See what your device is worth
              <ArrowForwardIosIcon sx={{ fontSize: "18px" }} />
            </Typography>
          </Box>
          <img
            style={{
              width: "900px",
              height: "500px",
            }}
            src={telefon}
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;

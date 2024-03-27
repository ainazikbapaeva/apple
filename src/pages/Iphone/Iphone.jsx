import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import apple from "../../image/Remove-bg.ai_1711097349718.png";
import VisionPro from "./VisionPro";
import Carousel from "./Carousel";
import MacBook from "./MacBook";
import Card from "./Card";
import Trade from "./Trade";
import Footer from "../Footer/Footer";

const Iphone = () => {
  return (
    <div>
      <Box id="iphone">
        <Box className="container">
          <Box className="iphone">
            <Typography
              sx={{ fontSize: "65px", fontWeight: "600" }}
              variant="h2"
            >
              iPhone 15 Pro
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "32px", mt: "10px" }}>
              Titanium. So strong. So light. So Pro.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "50px",
                mt: "15px",
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
            <img className="apple" src={apple} alt="" />
          </Box>
        </Box>
      </Box>
      <VisionPro />
      <Carousel />
      <MacBook />
      <Card />
      <Trade />
      <Footer />
    </div>
  );
};

export default Iphone;

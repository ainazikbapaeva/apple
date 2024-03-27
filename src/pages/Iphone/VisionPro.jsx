import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import apple_14pro from "../../image/ipphone14pro.png";
import vision from "../../image/visionPro-removebg-preview.png";
const VisionPro = () => {
  return (
    <div>
      <Box id="vision">
        <Box className="container">
          <Box className="vision">
            <Typography
              sx={{ fontSize: "65px", fontWeight: "600" }}
              variant="h2"
            >
              iPhone 15 Pro
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "32px", mt: "10px" }}>
              Naw camera . Naw design. Nawphoria.
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
            <img className="apple_img" src={apple_14pro} alt="" />

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  position: "relative",
                  left: "360px",
                  bottom: "30px",
                  objectFit: "cover",
                  width: "900px",
                  height: "1000px",
                }}
                src={vision}
                alt=""
              />
              <Box
                sx={{
                  position: "relative",
                  right: "390px",
                  top: "390px",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "65px", fontWeight: "600" }}
                  variant="h2"
                >
                  Vision Pro
                </Typography>
                <Typography variant="h5" sx={{ fontSize: "32px" }}>
                  Welcome to the ear of spatial computing.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "50px",
                    ml: "165px",
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
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default VisionPro;

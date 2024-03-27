import { Box, Typography } from "@mui/material";
import React from "react";
import witch from "../../image/witch-removebg-preview.png";
import AppleIcon from "@mui/icons-material/Apple";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ipad from "../../image/ipad-removebg-preview.png";
import MacBookPro from "../../image/MacBookPro-removebg-preview.png";

const MacBook = () => {
  return (
    <Box className="container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: "20px",
        }}
      >
        <Box className="macBook">
          <Box className="watch">
            <Typography
              sx={{
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              variant="h2"
            >
              <AppleIcon sx={{ fontSize: "50px" }} />
              watch
            </Typography>
            <Typography
              sx={{ color: "red", fontWeight: "500", fontSize: "23px" }}
              variant="h4"
            >
              series 9
            </Typography>
            <Typography
              sx={{
                fontSize: "26px",
                fontWeight: "500",
              }}
            >
              Smarter. Brighter. Mighter.
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
            <img src={witch} alt="" />
          </Box>

          <Box
            sx={{ position: "relative", right: "60px" }}
            className="macbook_air"
          >
            <Typography
              sx={{ fontWeight: "520", fontSize: "50px" }}
              variant="h2"
            >
              MacBook Air
            </Typography>
            <Typography
              sx={{
                fontSize: "26px",
              }}
            >
              Lern. Mean. M3 machine.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "50px",
                mt: "8px",
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
            <img style={{ width: "700px" }} src={MacBookPro} alt="" />
          </Box>
        </Box>

        <Box className="macBook">
          <Box
            sx={{
              position: "relative",
              top: "50px",
            }}
            className="macbook_air"
          >
            <Typography
              sx={{ fontWeight: "520", fontSize: "50px" }}
              variant="h2"
            >
              iPad
            </Typography>
            <Typography
              sx={{
                fontSize: "26px",
              }}
            >
              Lovable. Drawable. Magical.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "50px",
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
              style={{ width: "450px", marginTop: "40px" }}
              src={ipad}
              alt=""
            />
          </Box>

          <Box sx={{ position: "relative", left: "90px" }} className="watch2">
            <Typography
              sx={{
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              variant="h3"
            >
              AirPods Pro
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "500",
                color: "red",
              }}
            >
              Adaptive Audio. Naw playing
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "50px",
                mt: "15px",
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
              style={{ marginTop: "33px" }}
              src="https://www.apple.com/v/airpods-pro/g/images/meta/og__eui2mpgzwyaa_overview.png"
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MacBook;

import { Box, Typography } from "@mui/material";
import React from "react";
import toma from "../../image/05-toma-removebg-preview.png";

const Mac = () => {
  return (
    <Box className="bacraundBlue">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "90px",
          position: "relative",
          left: "230px",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "white",
              fontWeight: "700",
            }}
            variant="h1"
          >
            О - оой!
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: "300",
            }}
            variant="h4"
          >
            𝕊𝕠𝕞𝕖𝕥𝕙𝕚𝕟𝕘 𝕨𝕖𝕟𝕥 𝕨𝕣𝕠𝕟𝕘:
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: "300",
              mt: "10px",
            }}
            variant="h4"
          >
            ༺ 𝓔𝓻𝓻𝓸𝓻 404 ༻​🤔​💭​
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            bottom: "20px",
            left: "120px",
          }}
        >
          <input
            style={{
              width: "270px",
              height: "30px",
              border: "none",
              padding: "10px",
              fontSize: "15px",
              color: "grey",
              background: "none",
              backgroundColor: "#332a2ab9",
            }}
            type="text"
            placeholder="поиск по сайту"
          />
          <button
            style={{
              width: "80px",
              height: "30px",
              border: "none",
              fontSize: "19px",
            }}
          >
            найти
          </button>
        </Box>
        <Typography
          sx={{
            position: "relative",
            bottom: "20px",
            textAlign: "center",
            color: "white",
          }}
          variant="h4"
        >
          🅶🅾 🅱🅰🅲🅺 🆃🅾 🆃🅷🅴 <br /> 🅼🅰🅸🅽 🅿🅰🅶🅴
        </Typography>
      </Box>
      <img
        style={{
          objectFit: "cover",
          width: "900px",
          height: "900px",
          position: "relative",
          right: "170px",
        }}
        src={toma}
        alt=""
      />
    </Box>
  );
};

export default Mac;

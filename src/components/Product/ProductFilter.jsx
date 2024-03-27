import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const ProductFilter = () => {
  return (
    <Box id="filter_product">
      <Box className="container">
        <Paper className="filter_paper">
          <Box className="filter_card">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666"
              alt=""
            />
            <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
              Mac
            </Typography>
          </Box>

          <Box className="filter_card">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1692971740190"
              alt=""
            />
            <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
              iphone
            </Typography>
          </Box>

          <Box className="filter_card">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437"
              alt=""
            />
            <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
              ipad
            </Typography>
          </Box>

          <Box className="filter_card">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1693703822208"
              alt=""
            />
            <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
              Apple Watch
            </Typography>
          </Box>

          <Box className="filter_card">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=1702403595269"
              alt=""
            />
            <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
              Apple Vision Pro
            </Typography>
          </Box>

          <Box className="filter_card">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885"
              alt=""
            />
            <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
              Airpods
            </Typography>
          </Box>

          <Box className="filter_card">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000"
              alt=""
            />
            <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
              AirTag
            </Typography>
          </Box>

          <Box className="filter_card">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1692971740190"
              alt=""
            />
            <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
              iphone
            </Typography>
          </Box>

          <Box className="filter_card">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484"
              alt=""
            />
            <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
              Apple TV 4k
            </Typography>
          </Box>

          <Box className="filter_card">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654"
              alt=""
            />
            <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
              HomePod
            </Typography>
          </Box>

          <Box className="filter_card">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202403?wid=400&hei=260&fmt=png-alpha&.v=1707850611597"
              alt=""
            />
            <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
              Accessories
            </Typography>
          </Box>

          <Box className="filter_card">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054"
              alt=""
            />
            <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
              Apple Gift Card
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default ProductFilter;

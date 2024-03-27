import { Box, Typography } from "@mui/material";
import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Footer = () => {
  const styre = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    " AirPods",
    "TV & Home",
    "AirTag",
    "Accessories",
    " Gift Cards",
  ];
  const wallet = ["Wallet", " Apple Card", " Apple Pay", "Apple Cash"];
  const account = ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"];
  const entertaiment = [
    "Apple One",
    " Apple TV+",
    "Apple Music",
    "Apple Arcade",
    "Apple Fitness+",
    "Apple News+",
    " Apple Podcasts",
    " Apple Books",
    " App Store",
  ];
  const apple = [
    "Find a Store",
    "Genius Bar",
    "Today at Apple",
    "Apple Camp",
    " Apple Store App",
    "Certified Refurbished",
    "Apple Trade In",
    " Financing",
    " Carrier Deals at Apple",
    " Order Status",
    "Shopping Help",
  ];
  const Business = [" Apple and Business", "Shop for Business"];
  const education = [
    "Apple and Education",
    "Shop for K-12",
    "Shop for College",
  ];
  const healthcare = [
    "Apple in Healthcare",
    "Health on Apple Watch",
    "Health Records on iPhone",
  ];
  const conrenment = ["Shop for Government", "Shop for Veterans and Military"];
  const values = [
    "Accessibility",
    "Education",
    " Environment",
    "Inclusion and Diversity",
    "Privacy",
    " Racial Equity and Justice",
    "Supplier Responsibility",
  ];
  const about = [
    "Newsroom",
    " Apple Leadership",
    "Career Opportunities",
    "Investors",
    "Ethics & Compliance",
    "Events",
    " Contact Apple",
  ];
  return (
    <Box className="container">
      <hr />
      <Box className="footer">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "220px",
            marginTop: "30px",
          }}
        >
          <AppleIcon
            sx={{
              fontSize: "19px",
            }}
          />
          <ArrowForwardIosIcon
            sx={{
              fontSize: "17px",
            }}
          />
          <Typography
            sx={{
              fontSize: "15px",
              ml: "10px",
            }}
          >
            Apple Store Online
          </Typography>
        </div>

        <Box className="content-footer">
          <div>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "560",
              }}
              variant="h6"
            >
              Shop and Learn
            </Typography>
            {styre.map((el) => (
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "grey",
                  mt: "7px",
                }}
              >
                {el}
              </Typography>
            ))}
            <div>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "560",
                  mt: "15px",
                }}
                variant="h6"
              >
                Apple Wallet
              </Typography>
              {wallet.map((el) => (
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "grey",
                    mt: "7px",
                  }}
                >
                  {el}
                </Typography>
              ))}
            </div>
          </div>

          <div>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "560",
              }}
              variant="h6"
            >
              Account
            </Typography>
            {account.map((el) => (
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "grey",
                  mt: "7px",
                }}
              >
                {el}
              </Typography>
            ))}
            <div>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "560",
                  mt: "16px",
                }}
                variant="h6"
              >
                Entertainment
              </Typography>
              {entertaiment.map((el) => (
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "grey",
                    mt: "7px",
                  }}
                >
                  {el}
                </Typography>
              ))}
            </div>
          </div>

          <div>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "560",
              }}
              variant="h6"
            >
              Apple Store
            </Typography>
            {apple.map((el) => (
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "grey",
                  mt: "7px",
                }}
              >
                {el}
              </Typography>
            ))}
          </div>

          <div>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "560",
              }}
              variant="h6"
            >
              For Business
            </Typography>
            {Business.map((el) => (
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "grey",
                  mt: "7px",
                }}
              >
                {el}
              </Typography>
            ))}
            <div>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "560",
                  mt: "20px",
                }}
                variant="h6"
              >
                For Education
              </Typography>
              {education.map((el) => (
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "grey",
                    mt: "7px",
                  }}
                >
                  {el}
                </Typography>
              ))}
            </div>
            <div>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "560",
                  mt: "20px",
                }}
                variant="h6"
              >
                For Healthcare
              </Typography>
              {healthcare.map((el) => (
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "grey",
                    mt: "7px",
                  }}
                >
                  {el}
                </Typography>
              ))}
            </div>
            <div>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "560",
                  mt: "20px",
                }}
                variant="h6"
              >
                For Government
              </Typography>
              {conrenment.map((el) => (
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "grey",
                    mt: "7px",
                  }}
                >
                  {el}
                </Typography>
              ))}
            </div>
          </div>
          <div>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "560",
              }}
              variant="h6"
            >
              Apple Values
            </Typography>
            {values.map((el) => (
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "grey",
                  mt: "7px",
                }}
              >
                {el}
              </Typography>
            ))}
            <div>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "560",
                  mt: "20px",
                }}
                variant="h6"
              >
                About Apple
              </Typography>
              {about.map((el) => (
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "grey",
                    mt: "7px",
                  }}
                >
                  {el}
                </Typography>
              ))}
            </div>
          </div>
        </Box>
        <Typography
          sx={{ fontSize: "15px", color: "grey", ml: "210px", mt: "30px" }}
        >
          More ways to shop:
          <span style={{ color: "blue" }}>Find an Apple Store</span> or{" "}
          <span style={{ color: "blue" }}>other retailer</span> near you. Or
          call 1‑800‑MY‑APPLE.
        </Typography>
        <hr
          style={{
            marginTop: "10px",
          }}
        />
        <Typography
          sx={{ fontSize: "15px", color: "grey", ml: "210px", mt: "20px" }}
        >
          Copyright © 2024 Apple Inc. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

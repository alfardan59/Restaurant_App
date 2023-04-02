import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover":{
                color:"goldenrod",
                transform: "translateX(5px)",
                transition:'all 400ms',
            }
          }}
        >
          {/*Icons*/}
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; 2022
        </Typography>
      </Box>
    </>
  );
};

export default Footer;

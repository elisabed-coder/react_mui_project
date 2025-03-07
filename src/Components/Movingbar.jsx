import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles"; // Import styled
import React from "react";

const Movingbox = styled("div")(({ theme }) => ({
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "100%",
  background: "#fff",
  color: "#fff",
  padding: "10px 0",
  position: "relative",
  color: "black",
}));

const Movingbar = () => {
  return (
    <Movingbox>
      <Typography
        sx={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: "marquee 15s linear infinite",
        }}
      >
        WELCOME TO PRESS PLAY | Directors, full faculty & 2025-2026 tour dates
        coming soon! Click GET ACCESS for more info. | 3-Day Dance Convention &
        Competition with Jazz, Contemporary, Hip-Hop, Ballet, Tap, and More!
      </Typography>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </Movingbox>
  );
};

export default Movingbar;

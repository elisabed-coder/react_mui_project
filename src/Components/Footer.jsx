import React from "react";
import { Box, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";

const StyledBox = styled(Box)({
  position: "relative",
  bottom: 0,
});
const Footer = () => {
  return (
    <StyledBox>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Comment"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SendIcon />
        </IconButton>
      </Paper>{" "}
    </StyledBox>
  );
};

export default Footer;

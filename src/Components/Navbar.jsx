import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  styled,
  Typography,
} from "@mui/material";

import PinterestIcon from "@mui/icons-material/Pinterest";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <StyledToolBar>
          {/* Left side: Pinterest Icon + Press Play */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton>
              <PinterestIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }} // Hides on extra-small screens
            >
              PRESS PLAY
            </Typography>
          </Box>

          {/* Right side: Buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              size="medium"
              sx={{ display: { xs: "none", sm: "block" } }} // Hide on extra-small screens
            >
              LIVE
            </Button>
            <Button
              size="medium"
              startIcon={<VisibilityOutlinedIcon color="secondary" />}
            >
              Watchers
            </Button>
          </Box>
        </StyledToolBar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  styled,
} from "@mui/material";
import Typography from "@mui/material/Typography";

import PinterestIcon from "@mui/icons-material/Pinterest";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const StyledToolBar = styled(Toolbar)({});

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton>
            {" "}
            <PinterestIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            PRESS PLAY
          </Typography>
          <Button size="medium">LIVE</Button>
          <Button
            size="medium"
            startIcon={<VisibilityOutlinedIcon color="secondary" />}
          >
            Watchers
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

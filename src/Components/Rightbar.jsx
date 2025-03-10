import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <IconButton>
        <FacebookIcon />
      </IconButton>
      <IconButton>
        <InstagramIcon />
      </IconButton>
    </Box>
  );
};

export default Rightbar;

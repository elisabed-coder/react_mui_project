import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      Right
    </Box>
  );
};

export default Rightbar;

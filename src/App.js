import { Box, Stack } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";

function App() {
  return (
    <Box>
      <Stack
        direction="row
      "
        spacing={2}
        justifyContent="center-between"
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;

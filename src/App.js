import { Box, Stack } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import Movingbar from "./Components/Movingbar";

function App() {
  const videoURL = "https://www.w3schools.com/html/mov_bbb.mp4"; // Replace with a direct video link

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "80%",
        justifyContent: "center",
        maxHeight: "100vh",
      }}
    >
      <Navbar />
      <Movingbar />

      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "60px",
          left: 0,
          width: "100%",
          objectFit: "cover",
          zIndex: -1, // Send it behind other content
          maWidth: "340px",
          minWidth: "366px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <source src={videoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Above Video */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        sx={{ position: "relative", zIndex: 1, padding: "20px" }}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;

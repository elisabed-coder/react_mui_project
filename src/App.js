import { Box, Stack, styled } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import Movingbar from "./Components/Movingbar";

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  margin: "0 auto",
  width: "100dvh",
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "560px",
}));

function App() {
  const videoURL = "https://www.w3schools.com/html/mov_bbb.mp4";

  return (
    <StyledBox>
      <ContentWrapper>
        <Navbar />
        <Movingbar />

        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "relative",
            top: "60px",
            left: 0,
            width: "100%",
            objectFit: "cover",
            zIndex: -1,
            maxWidth: "340px",
            minWidth: "366px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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
      </ContentWrapper>
    </StyledBox>
  );
}

export default App;

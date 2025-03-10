import { Box, Stack, styled } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import Movingbar from "./Components/Movingbar";
import Footer from "./Components/Footer";

const StyledBox = styled(Box)(({ theme }) => ({
  margin: "0 auto",
  width: "100dvh",
  maxHeight: "100vh",
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  maxWidth: "560px",
}));

const VideoContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  left: 0,
  width: "100%",
  borderBottomLeftRadius: "20px",
  borderBottomRightRadius: "20px",
  overflow: "hidden",
  height: "100%",
  zIndex: "-1",
  flexGrow: 1,
}));

const OverlayContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: "1",
  bottom: "50px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

function App() {
  const videoURL = "/assets/dance.mp4";

  return (
    <StyledBox>
      <ContentWrapper>
        <Navbar />
        <Movingbar />

        <VideoContainer>
          <video
            src={videoURL}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              objectFit: "cover",
              display: "block",
              maxHeight: "80vh",
            }}
          />
        </VideoContainer>
        <OverlayContent>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            sx={{
              position: "relative",
              zIndex: 1,
              padding: "20px",
            }}
          >
            <Sidebar />
            <Feed />
            <Rightbar />
          </Stack>
          <Footer />
        </OverlayContent>
      </ContentWrapper>
    </StyledBox>
  );
}

export default App;

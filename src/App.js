import { Button, styled } from "@mui/material";
import "./App.css";
import PsychologyIcon from "@mui/icons-material/Psychology";
function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    p: 1,
    m: 2,
    "&:hover": { backgroundColor: "LightBlue" },
  });
  return (
    <div className="App">
      <BlueButton
        variant="contained"
        startIcon={<PsychologyIcon />}
      ></BlueButton>
    </div>
  );
}

export default App;

import "./App.scss";
import Intro from "./sections/intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import WhiteSpace from "./sections/whitespace/WhiteSpace";
import Typography from "./sections/typography/Typography";
import { useState } from "react";
import Dashboard from "./sections/dashboard/Dashboard";

function App() {
  const [fontSize, setFontSize] = useState(12);
  const [lineHeight, setLineHeight] = useState(1.0);
  const [lineLength, setLineLength] = useState(30);

  return (
    <div>
      <NavBar></NavBar>
      <div className="app">
        <Intro></Intro>
        <WhiteSpace></WhiteSpace>
        <Typography
          fontSize={fontSize}
          lineHeight={lineHeight}
          lineLength={lineLength}
          setFontSize={setFontSize}
          setLineHeight={setLineHeight}
          setLineLength={setLineLength}
        ></Typography>
        <Dashboard
          fontSize={fontSize}
          lineHeight={lineHeight}
          lineLength={lineLength}
        ></Dashboard>
      </div>
    </div>
  );
}

export default App;

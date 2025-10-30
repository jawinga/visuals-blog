import "./App.scss";
import Intro from "./sections/intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import WhiteSpace from "./sections/whitespace/WhiteSpace";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="app">
        <Intro></Intro>
        <WhiteSpace></WhiteSpace>
      </div>
    </div>
  );
}

export default App;

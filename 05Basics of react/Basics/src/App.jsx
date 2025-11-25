import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar title="Navbar1" link="google.com" number={3} />
      <Navbar titleP="Navbar4"/>
    </div>
  );
}

export default App;

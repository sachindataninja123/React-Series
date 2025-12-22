import "./App.css";
import A from "./Components/A";
import B from "./Components/B";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-3xl text-white flex items-center justify-center  gap-5 p-5 bg-amber-800 ">
        APP
        <A />
        <B />
      </div>
    </div>
  );
};

export default App;

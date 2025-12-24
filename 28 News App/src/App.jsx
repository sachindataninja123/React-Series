import React from "react";
import Navbar from "./Components/Navbar";
import NewsPage from "./pages/NewsPage";
import Category from "./Components/Category";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar className={"sticky top-0 z-20"} />
      <Category className={"p-5 sticky top-16 z-10"} />
      <NewsPage className="pb-10 px-5 pt-5" />
      <Footer />
    </div>
  );
};

export default App;

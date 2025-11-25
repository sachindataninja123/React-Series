import React, { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/footer";

const App = () => {

  const [data, setData] = useState("sachin kushwaha");
  console.log(data);

  return (
    <div>
      <Header data={data} />
      <Layout data={data}/>
      <Footer data={data} />
    </div>
  );
};

export default App;

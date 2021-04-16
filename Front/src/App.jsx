import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import WilderList from "./components/WilderList/WilderList";
import AddWilder from "./components/AddWilder/AddWilder";
import { Div } from './style';
import axios from "axios";

function App() {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const result = await axios("http://localhost:5000/api/wilder/findAll");
        setWilders(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWilders();
  }, []);

  return (
    <Div>
      <Header />
      <WilderList {...wilders} />
      <AddWilder />
    </Div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Axios from "axios";
import Market from "./Market.jsx";
var App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:1337/items").then((res) => {
      setItems(res.data);
      console.log(items);
    });
  }, []);

  return (
    <div>
      <h1>3EFRIT Black Market</h1>
      <Market items={items} />
    
    </div>
  );
};

export default App;
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

import Add from "./options/Add";
import Details from "./options/Details";
import Edit from "./options/Edit";
import "./main.sass";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productID/add" element={<Add />}></Route>
        <Route path="/products/:editID/edit" element={<Edit />}></Route>
        <Route path="/products/:productID" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default App;

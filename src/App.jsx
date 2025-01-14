import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

import Add from "./options/Add";
import Details from "./options/Details";
import Edit from "./options/Edit";
import "./main.sass";
import Login from "./Components/Ready/Login";
import Register from "./Components/Ready/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/productList" element={<Home />}></Route>
        <Route path="/signIn" element={<Login />}></Route>
        <Route path="/signUp" element={<Register />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productID/add" element={<Add />}></Route>
        <Route path="/products/:editID/edit" element={<Edit />}></Route>
        <Route path="/products/:productID" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default App;

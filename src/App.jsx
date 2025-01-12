import './App.css'
import { Route,Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import SideBar from "./Components/SideBar"
import Home from "./Pages/Home"
import Products from "./Pages/Products"

import Add from "./options/Add"
import Details from "./options/Details"
import Edit from "./options/Edit"

function App() {
  return (
    <>
      <div className="app">
        <NavBar/>
        <div className="row me-0">
          <div className="col-2 sidebar">
            <SideBar/>
          </div>
          <div className="col-10 position-relative">
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/products" element={<Products/>}></Route>
              <Route path='/products/add'element={<Add/>}></Route>
              <Route path='/products/:productID' element={<Details/>}></Route>
              <Route path='/products/edit/:editID' element={<Edit/>}></Route>
            </Routes>
          </div>
        </div>

      </div>
    </>
  )
}

export default App

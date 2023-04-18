import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import Favorite from "./Pages/Favorite";
import Header from './Components/Header/index';
import Detail from "./Pages/detail";

import "./App.css";
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Favorite" element={<Favorite />}></Route>
        <Route path="/Detail" element={<Detail />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

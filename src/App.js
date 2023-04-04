import React from "react";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar' 
import Home from './Pages/Home/Home' 
import Coins from './Pages/Coins/Coins' 
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path="/"  Component={Home}/>
        <Route  path="/coins/:id"  Component={Coins}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import Header from './components/Header/Header';
import Home from "./Pages/Home/Home";
import SingleProduct from './common/singleProduct/SingleProduct';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilterSection from './components/filterSection/FilterSection';
import MyCart from "./components/mycart/MyCart";

const App = () => {
  return <div>
    <Router>
    <Header/>
    <Routes>

    <Route path="/" exact element={<Home/>}/>
    <Route path="/singleproduct/:id"  exact element={<SingleProduct/>}/>
    <Route path="/my-cart" exact element={<MyCart/>}/>
    <Route path="/products" exact element={<FilterSection/>}/>
    </Routes>
    </Router>
    
  </div>;
};

export default App;

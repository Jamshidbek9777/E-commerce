import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/index";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Orders from "./components/Orders";
import Cart from "./components/Cart";
// import Profile from "./components/Profile";
import MobileSearch from "./components/Mobile/MobileSearch";
import Sidebar from "./components/Mobile/Sidebar";
import MobileCategories from "./components/Mobile/MobileCategories";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <SearchBar />
          <MobileSearch />
          <Navbar />
          <MobileCategories />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>This page not found</h1>} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />

            {/* <Route path="profile" element={<Profile />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

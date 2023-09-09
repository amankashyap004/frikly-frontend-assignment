import React from "react";
import Header from "./components/Header";
import Carousels from "./components/Carousels";
import Products from "./components/Products";
import Catalogue from "./components/Catalogue";
import MaterialFinish from "./components/MaterialFinish";
import ProductDescription from "./components/ProductDescription";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="font-montserrat">
      <Header />
      <Carousels />
      <Products />
      <Catalogue />
      <MaterialFinish />
      <ProductDescription />
      <Footer />
    </div>
  );
}

export default App;

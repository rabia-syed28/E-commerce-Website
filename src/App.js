import React, { useState } from "react";
import Nav from "./components/nav";
import Rout from "./components/rout";
import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import Homeproduct from "./components/home_product";

const App = () => {
  // Add To cart
  const [cart, setCart] = useState([]);
  //shop page product
  const [shop, setShop] = useState(Homeproduct);
  //Shop search filter
  const [search, setSearch] = useState("");
  //shop category filter
  const Filter = (x) => {
    const cateFilter = Homeproduct.filter((product) => {
      return product.cat === x;
    });
    setShop(cateFilter);
  };
  const allCateFilter = () => {
    setShop(Homeproduct);
  };

  //Shop search filter
  const searchLength = (search || []).length === 0;
  const searchProduct = () => {
    if (searchLength) {
      alert("Please write any product you want to search");
      setShop(Homeproduct);
    } else {
      const searchFilter = Homeproduct.filter((x) => {
        return x.cat === search;
      });
      setShop(searchFilter);
    }
  };
  //Add To cart
  const addToCart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("This product is allready added in cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added To cart");
    }
    console.log(cart);
  };

  return (
    <>
      <BrowserRouter>
        <Nav
          search={search}
          setSearch={setSearch}
          searchProduct={searchProduct}
        />
        <Rout
          setCart={setCart}
          cart={cart}
          shop={shop}
          Filter={Filter}
          allCateFilter={allCateFilter}
          addToCart={addToCart}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

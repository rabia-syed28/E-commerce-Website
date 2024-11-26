import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Homeproduct from "./home_product";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import "./home.css";

const Home = ({ addToCart }) => {
  //Product Category
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturdProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  //Trending Product
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
  // Filter of trending Product
  const filterCategry = (x) => {
    const filterProduct = Homeproduct.filter((curElm) => {
      return curElm.type === x;
    });
    setTrendingProduct(filterProduct);
  };
  //All Trending Product
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct);
  };
  //Product Type
  useEffect(() => {
    productCategory();
  });
  const productCategory = () => {
    const newCategory = Homeproduct.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newCategory);
    // Featured Product
    const featuredCategory = Homeproduct.filter((x) => {
      return x.type === "featured";
    });
    setFeaturdProduct(featuredCategory);

    // Top Product
    const topCategory = Homeproduct.filter((x) => {
      return x.type === "top";
    });
    setTopProduct(topCategory);
  };

  return (
    <>
      <div className="home">
        <div className="top_banner">
          <div className="content">
            <h3>Silver Aluminium </h3>
            <h2>Apple Watch</h2>
            <p>30% off at your first order</p>
            <Link to="/shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left_box">
              <div className="header">
                <div className="heading">
                  <h2 onClick={() => allTrendingProduct()}>Trending Product</h2>
                </div>
                <div className="category">
                  <h3 onClick={() => filterCategry("new")}>New</h3>
                  <h3 onClick={() => filterCategry("featured")}>Featured</h3>
                  <h3 onClick={() => filterCategry("top")}>Top Selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {trendingProduct.map((curElm) => {
                    return (
                      <>
                        <div className="box">
                          <div className="img_box">
                            <img src={curElm.image} alt="Product-image"></img>
                            <div className="icon">
                              <div className="icon_box">
                                <FaEye />
                              </div>
                              <div className="icon_box">
                                <FaHeart />
                              </div>
                            </div>
                          </div>
                          <div className="info">
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <button
                              className="btn"
                              onClick={() => addToCart(curElm)}
                            >
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <button>Show More</button>
              </div>
            </div>
            <div className="right_box">
              <div className="right_container">
                <div className="testimonal">
                  <div className="head">
                    <h3>Our Testimonal</h3>
                  </div>
                  <div className="detail">
                    <div className="img_box">
                      <img src="image/T1.avif" alt="Testimonal"></img>
                    </div>
                    <div className="info">
                      <h3>Stephen Robot</h3>
                      <h4>Web Designer</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="newsletter">
                  <div className="head">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="form">
                    <p>join our mailing list</p>
                    <input
                      type="email"
                      placeholder="E-mail"
                      autoComplete="off"
                    ></input>
                    <button>Subscribe</button>
                    <div className="icon_box">
                      <div className="icon">
                        <FaFacebookF />
                      </div>
                      <div className="icon">
                        <FaXTwitter />
                      </div>
                      <div className="icon">
                        <FaInstagram />
                      </div>
                      <div className="icon">
                        <FaYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banners">
          <div className="container">
            <div className="left_box">
              <div className="box">
                <img src="image/Multi-Banner-1.avif" alt="banner"></img>
              </div>
              <div className="box">
                <img src="image/Multi-Banner-2.avif" alt="banner"></img>
              </div>
            </div>
            <div className="right_box">
              <div className="top">
                <img src="image/Multi-Banner-3.webp" alt="banner"></img>
                <img src="image/Multi-Banner-4.avif" alt="banner"></img>
              </div>
              <div className="bottom">
                <img src="image/Multi-Banner-5.webp" alt="banner"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="product_type">
          <div className="container">
            <div className="box">
              <div className="header">
                <h2>New Product</h2>
              </div>
              {newProduct.map((curElm) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={curElm.image} alt="product-image"></img>
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className="icon">
                          <button>
                            <FaEye />
                          </button>
                          <button>
                            <FaHeart />
                          </button>
                          <button onClick={() => addToCart(curElm)}>
                            <FaShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Featured Product</h2>
              </div>
              {featuredProduct.map((curElm) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={curElm.image} alt=""></img>
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className="icon">
                          <button>
                            <FaEye />
                          </button>
                          <button>
                            <FaHeart />
                          </button>
                          <button onClick={() => addToCart(curElm)}>
                            <FaShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Top Product</h2>
              </div>
              {topProduct.map((curElm) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={curElm.image} alt=""></img>
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className="icon">
                          <button>
                            <FaEye />
                          </button>
                          <button>
                            <FaHeart />
                          </button>
                          <button onClick={() => addToCart(curElm)}>
                            <FaShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

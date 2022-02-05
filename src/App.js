import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SideFilter from "./components/SideFilter";
import axios from "axios";

function App() {
  const [productList, setProductList] = useState([]);

  const [productNameList, setProductNameList] = useState([])
  const [cityList, setCityList] = useState([])
  const [stateList, setStateList] = useState([])

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    axios
      .get("https://assessment-edvora.herokuapp.com")
      .then(function (response) {
        console.log(response.data);
        const products = response.data
        setProductList(products)
        const productNameList = products.map(product => {
          return product.product_name
        })
        const productNames = [...new Set(productNameList)]
        setProductNameList(productNames)
        const cityList = products.map(product => {
          return product.address.city
        })
        const cities = [...new Set(cityList)]
        setCityList(cities)
        const stateList = products.map(product => {
          return product.address.state
        })
        const states = [...new Set(stateList)]
        setStateList(states)
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <div className="App">
      <aside className="sidebar">
        <SideFilter productNameList={productNameList} cityList={cityList} stateList={stateList} />
      </aside>
      <main className="main">
        <h2>Edvora</h2>
        <h4>Products</h4>
        <ProductList productList={productList} />
        <ProductList productList={productList} />
      </main>
    </div>
  );
}

export default App;

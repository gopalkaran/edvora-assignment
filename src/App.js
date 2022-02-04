import React from "react";
import './App.css';
import ProductList from './components/ProductList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SideFilter from './components/SideFilter';

function App() {
  return (
    <div className="App">
        <aside  className='sidebar'>
          <SideFilter />
        </aside>
        <main className='main'>
          <h2>Edvora</h2>
          <h4>Products</h4>
        <ProductList />
        <ProductList />
        </main>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import CardComponents from "./components/CardComponents";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import ListComponents from "./components/ListComponents";
import NavbarComponents from "./components/NavbarComponents";
import SidebarComponents from "./components/SidebarComponents";
import TableComponents from "./Pages/TableComponents";

function App() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
    setProducts(dataProduct);
    // console.log(products);
  };

  const data = {
    data1: ["Data 1"],
    data2: "Data 2",
    data3: "Data 3",
  };

  useEffect(() => {
    getDataProducts();
  });

  return (
    <Router>
      <div className="wrapper">
        <NavbarComponents />
        <div className="main_container">
          <SidebarComponents />
          <div className="container">
            <div className="item">
              <Routes>
                <Route
                  xeact
                  path="/"
                  element={products.map((produk) => {
                    return (
                      <CardComponents
                        key={produk.id}
                        title={produk.title}
                        price={produk.price}
                        category={produk.category}
                        description={produk.description}
                        image={produk.image}
                      />
                    );
                  })}
                />
                <Route path="/second" element={<SecondPage />} />
                <Route path="/third" element={<ThirdPage />} />
                <Route
                  path="/list"
                  element={products.map((produk) => {
                    return (
                      <ListComponents
                        key={produk.id}
                        title={produk.title}
                        price={produk.price}
                        category={produk.category}
                        description={produk.description}
                        image={produk.image}
                      />
                    );
                  })}
                />
                <Route
                  path="/table"
                  element={<TableComponents props={data} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

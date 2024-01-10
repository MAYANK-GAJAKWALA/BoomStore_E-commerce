import "./App.css";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Component
import Home from "./Component/Home";
import ProductDetail from "./Component/ProductDetail";
import NavListProductDetail from "./Component/NavListProductDetail";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/productDetail" element={<NavListProductDetail />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

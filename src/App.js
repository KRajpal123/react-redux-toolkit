import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="react-redux-toolkit">
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/dashboard" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

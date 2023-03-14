import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Axor from "./pages/filter/Axor";
import Smk from "./pages/filter/Smk";
import Re from "./pages/filter/Re";
import  Sidebar  from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <div className="left">
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/axor" element={<Axor />} />
            <Route path="/smk" element={<Smk />} />
            <Route path="/re" element={<Re />} />
          </Routes>
          </div>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

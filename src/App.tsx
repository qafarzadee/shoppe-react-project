import { Routes, Route } from "react-router-dom";
import HomeDesktop from "./pages/HomeDesktop";
import ProductDesktop from "./pages/ProductDesktop";
import ContactDesktop from "./pages/ContactDesktop";
import CartDesktop from "./pages/CartDesktop";
import ShopDesktop from "./pages/ShopDesktop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeDesktop />} />
      <Route path="/product" element={<ProductDesktop />} />
      <Route path="/contact" element={<ContactDesktop />} />
      <Route path="/cart" element={<CartDesktop />} />
      <Route path="/shop" element={<ShopDesktop />} />
    </Routes>
  );
}
export default App;

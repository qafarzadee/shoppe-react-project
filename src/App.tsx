import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeDesktop from "./pages/HomeDesktop";
import ProductDesktop from "./pages/ProductDesktop";
import ContactDesktop from "./pages/ContactDesktop";
import CartDesktop from "./pages/CartDesktop";
import ShopDesktop from "./pages/ShopDesktop";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/-product-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/-contact-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/-cart-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/-shop-desktop":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeDesktop />} />
      <Route path="/-product-desktop" element={<ProductDesktop />} />
      <Route path="/-contact-desktop" element={<ContactDesktop />} />
      <Route path="/-cart-desktop" element={<CartDesktop />} />
      <Route path="/-shop-desktop" element={<ShopDesktop />} />
    </Routes>
  );
}
export default App;

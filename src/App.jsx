import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/products/:slug"
          element={<ProductDetails />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
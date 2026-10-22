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
import LocationPage from "./pages/LocationPage";

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

        {/* Local SEO Landing Pages */}
        <Route
          path="/locations/rubber-manufacturer-bangalore"
          element={<LocationPage locationKey="rubber-manufacturer-bangalore" />}
        />

        <Route
          path="/locations/rubber-products-peenya-industrial-area"
          element={<LocationPage locationKey="rubber-products-peenya-industrial-area" />}
        />

        <Route
          path="/locations/rubber-seals-manufacturer-karnataka"
          element={<LocationPage locationKey="rubber-seals-manufacturer-karnataka" />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  lazy,
  Suspense,
} from "react";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const Home = lazy(() =>
  import("./pages/Home")
);

const Products = lazy(() =>
  import("./pages/Products")
);

const AboutPage = lazy(() =>
  import("./pages/AboutPage")
);

const Contact = lazy(() =>
  import("./pages/Contact")
);

const ProductDetails = lazy(() =>
  import("./pages/ProductDetails")
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
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
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
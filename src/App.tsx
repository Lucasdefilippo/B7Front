import "./App.css";
import { Route, Routes } from "react-router";
import HeaderComponent from "./components/Header/HeaderComponent";
import Footer from "./components/Footer/FooterComponent";
import Index from "./pages/Index";
import CategoriesComponent from "./pages/CategoriesComponent";
import ProductPageComponent from "./pages/ProductPageComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="w-full max-w-7xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories/:slug" element={<CategoriesComponent />} />
          <Route path="/product/:id" element={<ProductPageComponent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

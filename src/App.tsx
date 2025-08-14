import "./App.css";
import { Route, Routes } from "react-router";
import Index from "./pages/Index";
import HeaderComponent from "./components/Header/HeaderComponent";
import Footer from "./components/Footer/FooterComponent";
import Page from "./pages/categories/slug/Page";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="w-full max-w-7xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories/:slug" element={<Page />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import Navbar from './components/navigation/Navbar';

function App() {
 
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

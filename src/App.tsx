import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import {
  Home,
  About,
  News,
  Support,
  LocalServers,
  OnlineServers,
  LocalGames,
  OnlineGames,
} from "./components/lazy/LazyComponents";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/local-servers" element={<LocalServers />} />
          <Route path="/online-servers" element={<OnlineServers />} />
          <Route path="/local-games" element={<LocalGames />} />
          <Route path="/online-games" element={<OnlineGames />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

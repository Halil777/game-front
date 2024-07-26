import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {
  Home,
  About,
  News,
  Support,
  LocalServers,
  OnlineServers,
  LocalGames,
  OnlineGames,
} from "./components/lazy/LazyComponents"; // Import NewsDetail for detailed news pages
import NewsDetail from "./pages/news/NewsDetail ";
import SignUp from "./pages/sign-up/SignUp";
import Login from "./pages/login/Login";
import TeamSpeak from "./pages/team-speak/TeamSpeak";
import RulesDetail from "./pages/team-speak/RulesDetail";

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
          <Route path="/team-speak" element={<TeamSpeak />} />
          <Route path="/teamspeak-rules" element={<RulesDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          {/* Dynamic route for news details */}
          <Route path="/support" element={<Support />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

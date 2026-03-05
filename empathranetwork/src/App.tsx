import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateCampaign from "./pages/CreateCampaign";
import Header from "./components/Header";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ExploreCampaigns from "./pages/ExploreCampaigns"
import CampaignDetails from "./pages/CampaignDetails"
import "./App.css";

function App() {

  return (
    <BrowserRouter>

      <Header />

      <main className="main-container">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/create-campaign"
            element={<CreateCampaign />}
          />
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/campaigns" element={<ExploreCampaigns />} />
          <Route path="/campaign/:id" element={<CampaignDetails />} />
        </Routes>

      </main>

    </BrowserRouter>
  );
}

export default App;
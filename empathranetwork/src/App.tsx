import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateCampaign from "./pages/CreateCampaign";
import Header from "./components/Header";
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

        </Routes>

      </main>

    </BrowserRouter>
  );
}

export default App;
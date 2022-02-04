import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import CryptoCurrencies from "./components/CryptoCurrencies";
import News from "./components/News";
import CryptoDetails from "./pages/CryptoDetails";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cryptocurrencies" element={<CryptoCurrencies />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/crypto/:id" element={<CryptoDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

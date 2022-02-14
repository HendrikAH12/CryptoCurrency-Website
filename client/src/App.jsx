import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import HomePage from "./pages/Home";
import CryptocurrenciesPage from "./pages/Cryptocurrencies";
import NewsPage from "./pages/News";
import CryptoDetailsPage from "./pages/CryptoDetails";

import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cryptocurrencies" element={<CryptocurrenciesPage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/crypto/:id" element={<CryptoDetailsPage />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

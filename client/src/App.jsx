import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import HomePage from "./pages/Home";
import CryptocurrenciesPage from "./pages/Cryptocurrencies";
import NewsPage from "./pages/News";
import CryptoDetailsPage from "./pages/CryptoDetails";
import AccountSettingsPage from "./pages/AccountSettings";
import AccountPage from "./pages/Account";

import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
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
          <Route path="/settings" element={<AccountSettingsPage />}></Route>
          <Route path="/account" element={<AccountPage />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

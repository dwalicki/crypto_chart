import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Coin } from './components/Coin'
import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:coinId/" element={<Coin />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </Router>
  );
}

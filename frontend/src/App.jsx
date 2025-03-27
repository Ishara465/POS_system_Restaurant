import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu } from "./pages/index.js";
import Headers from "./components/shared/Headers.jsx";

function Layout() {
  const location = useLocation();
  const hideHeaderRouters = ["/auth"];
  return (
    <>
      {!hideHeaderRouters.includes(location.pathname) && <Headers />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;

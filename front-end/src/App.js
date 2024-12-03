import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./views/Inicio";
import Header from "./components/Header";
import Menu from "./views/Menu";
import Cart from "./components/Cart";
import Provider from "./context/Provider";
import LaCarte from "./views/LaCarte";
import Admin from "./views/Admin";
import Ctrl from "./views/Ctrl";
import CtrlAddPlate from "./components/CtrlAddPlate";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from './context/ProtectedRoute';
import Kitchen from "./views/Kitchen";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Cart />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/lacarte" element={<LaCarte />} />
            <Route path="/admin" element={ <Admin />} />
            <Route path="/admin/control" element={
              <ProtectedRoute>
                  <Ctrl />
              </ProtectedRoute>} />
            <Route path="/admin/control/addPlate" element={
              <ProtectedRoute>
                <CtrlAddPlate />
              </ProtectedRoute>
              } />
            <Route path="/admin/control/addPlate/:id" element={
              <ProtectedRoute>
                <CtrlAddPlate />
              </ProtectedRoute>
              } />
            <Route path="/admin/kitchen" element={
              <ProtectedRoute>
                <Kitchen />
              </ProtectedRoute>
              } />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
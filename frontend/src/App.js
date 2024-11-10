import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import ViewProduct from './pages/ViewProduct';
import AdminView from './pages/AdminView';
import Dashboard from './pages/Offcut-Dashboard.js';
import '../src/styles.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Offcut Specials</h1>} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-product" element={<ViewProduct />} />
        <Route path="/admin-product" element={<AdminView />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;

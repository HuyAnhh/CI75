import logo from './logo.svg';
import './App.css';
import Auth from "./pages/Auth"
import Login from './pages/Login'
import Register from './pages/Register'
import {Routes, Route, Link} from 'react-router-dom'
import About from './pages/About';
import Cart from './pages/Cart';
import Invoices from './pages/Invoices';
import Profile from './pages/Profile';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/products">Products</Link>
        <Link to="/invoices">Invoices</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Auth />}>
            <Route path="products" element={<Products />}></Route>
            <Route path="invoices" element={<Invoices />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="about" element={<About />}></Route>
        </Route>
        <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// Anh chưa nghĩ ra cách làm bài 2 Hào ơi :( 

import './App.css';
import CartPage from './components/CartPage/CartPage';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
     <LandingPage/>
     <ProductPage/>
     <CartPage/>
     <Login/>
     <Signup/>
    </div>
  );
}

export default App;

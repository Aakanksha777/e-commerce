import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import NewCollection from './components/NewCollection/NewCollection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <NewCollection/>
      <Footer/>
    </div>
  );
}

export default App;

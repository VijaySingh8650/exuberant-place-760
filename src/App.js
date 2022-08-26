
import './App.css';
import Footer from './Components/Footer';
// import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Router from './Route/Router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router/>
      {/* <Footer/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;

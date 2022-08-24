
import './App.css';
// import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Router from './Route/Router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router/>
      {/* <Login/> */}
    </div>
  );
}

export default App;

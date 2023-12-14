import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/RegisterUser.js'
import './components/NavBar.js'
import NavBar from './components/NavBar.js'
import RegisterUser from './components/RegisterUser.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <RegisterUser/>
    </div>
  );
}

export default App;
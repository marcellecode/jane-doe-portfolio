import logo from './logo.svg';
import './App.css';
import Bio from './sections/bio/bio';
import Navbar from './components/navbar/navbar'; 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Bio/>
    </div>
  );
}

export default App;

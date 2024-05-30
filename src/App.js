import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Section from './Components/Section';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Section />
      <About />
    </div>
  );
}
export default App;


import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Feature from './Components/Feature/Feature';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Feature />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;

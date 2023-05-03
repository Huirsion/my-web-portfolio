import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;

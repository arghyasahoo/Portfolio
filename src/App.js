import './App.css';
import About from './components/about_me';
import Footer from './components/footer';
import NavBar from './components/header';
import Intro from './components/intro';
import Projects from './components/projects';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <NavBar />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;

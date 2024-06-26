import './App.css';
import About from './components/about_me';
import Footer from './components/footer';
import NavBar from './components/header';
import Intro from './components/intro';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';

function App() {
  return (
    <div className="App container-fluid">
      <NavBar />
      <Intro />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

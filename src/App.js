import './App.css';
import Header from "./components/header";
import Intro from './components/Intro';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

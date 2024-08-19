
import './App.css';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';

function App() {
  return (
   <div className='App'>
      <section id='home'> <Home/> </section>
      <section id='about'> <About/> </section>
      <section id='skills'> <Skills/> </section>
      <section id='projects'> <Projects/> </section>
      <section id='contact'> <Contact/> </section>
      
      
      
      
   </div>
  );
}

export default App;

import './App.css';
import Home from './Home';
import Navigation from './Navigation';
import About from './About';
import Projects from './projects';

function App() {
  return (
    <div class="Scroll">
       <Navigation/>
       <Home/>
       <About/>
       <Projects/>
    </div>
  );
}

export default App;

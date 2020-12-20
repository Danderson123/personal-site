import Landing from './components/Landing'
import Navigate from './components/Navigate'
import About from './components/About'
import Education from './components/Education'
import Interests from './components/Interests'
import Experience from './components/Experience'
import Contact from './components/Contact'

import { useEffect, useState } from 'react'
import './CSS/App.css';
import './CSS/Content.css';

function App() {

  const [windowWidth, setWidth] = useState(window.outerWidth)
  const [windowHeight, setHeight] = useState(window.outerHeight)

  const updateDimensions = () => {
    setWidth(window.outerWidth);
    setHeight(window.outerHeight);
  };

  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="App">
      <>
        <div className="landing-container" style={{height: windowHeight + "px", width: windowWidth + " px"}}>
        <Landing windowWidth={windowWidth} windowHeight={windowHeight}/>
        </div>
        <Navigate windowWidth={windowWidth} windowHeight={windowHeight}/>
        <About windowWidth={windowWidth} windowHeight={windowHeight}/>
        <Education windowWidth={windowWidth} windowHeight={windowHeight}/>
        <Interests windowWidth={windowWidth} windowHeight={windowHeight}/>
        <Experience windowWidth={windowWidth} windowHeight={windowHeight}/>
        <Contact windowWidth={windowWidth} windowHeight={windowHeight}/>
      </>
    </div>
  );
}

export default App;

import Home from './routes/Home'
import Project from './routes/Project';
import Blog from './routes/Blog';


import "aos/dist/aos.css";
import {
  HashRouter, Routes,Route,
} from 'react-router-dom'
import ReactTooltip from 'react-tooltip';
function App() {


  return (
    <>
      < HashRouter>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/project/:id" element={<Project />} />
            <Route exact path="/blog/:id" element={<Blog />} />
            <Route path='*' element={<Home />}/>
        </Routes>    
      </ HashRouter>
      <ReactTooltip />
    </>
    
  );
}


export default App;

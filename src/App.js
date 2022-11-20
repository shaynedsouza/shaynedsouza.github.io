import Home from './routes/Home'
import Project from './routes/Project';
import Blog from './routes/Blog';


import "aos/dist/aos.css";
import {
  BrowserRouter, Routes,Route,
} from 'react-router-dom'
function App() {


  return (
    <BrowserRouter>
      <Routes>

         <Route exact path="/" element={<Home />}/>
          <Route  path="/project/*" element={<Project />} />
          <Route path="/blog/*" element={<Blog />} />

      </Routes>
    
    </BrowserRouter>
  );
}


export default App;

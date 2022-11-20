import Home from './routes/Home'
import Project from './routes/Project';
import Blog from './routes/Blog';


import "aos/dist/aos.css";
import {
  BrowserRouter, Routes,Route
} from 'react-router-dom'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="project" element={<Project />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}


export default App;

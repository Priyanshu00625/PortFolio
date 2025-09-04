
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes , Route } from "react-router";
import './index.css'
import Home from './Home/Home.jsx'
import About from './about/About.jsx';
import Service from './services/Services.jsx';
import Project from './project/Project.jsx';
import Contect from './contact me/Contect.jsx';
createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/service' element={<Service/>}></Route>
    <Route path='/project' element={<Project/>}></Route>
    <Route path='/contect' element={<Contect/>}></Route>
    </Routes>
  </BrowserRouter>

)

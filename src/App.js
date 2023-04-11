import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
//import "..node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from './web_components/Home';
import About from './web_components/About'
import Service from './web_components/Service'
import Contact from './web_components/Contact'
import Navbar from './web_components/Navbar';
import Footer from './web_components/Footer';
import History from './web_components/History';


function App() {

  return (
    <>
   <BrowserRouter >
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Service" element={<Service />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/History" element={<History/>} />
    {/* <Route>
        <Redirect to="/" />
      </Route> */}
    </Routes>
   
    

   </BrowserRouter>
   <Footer/>
   
   </>
  );
}

export default App;


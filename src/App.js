import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import About from './components/About';
import Error from './components/Error';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/about" element={<About />} />
        <Route exact="true" path="/contact" element={<Contact />} />
        <Route exact="true" path="/service" element={<Service />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

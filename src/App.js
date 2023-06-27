import React from 'react';
import Navigation from './components/layout/Navigation';
import Summary from './components/layout/Summary';
import FooterComponent from './components/layout/FooterComponent';
import AvailableProducts from './components/products/AvailableProducts';
import ProductProvider from './components/store/ProductProvider';
import About from './components/layout/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/layout/Home';

function App() {
return(
  <Router>
 <ProductProvider>
      <Navigation/>
      <Summary/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/store" element={<AvailableProducts/>}/>
      </Routes>
      <Routes>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <FooterComponent/>
    </ProductProvider>
  </Router>
   
)

}

export default App;

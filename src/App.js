import React from 'react';
import Navigation from './components/layout/Navigation';
import Summary from './components/layout/Summary';
import FooterComponent from './components/layout/FooterComponent';
import AvailableProducts from './components/products/AvailableProducts';
import ProductProvider from './components/store/ProductProvider';

function App() {
return(
    <ProductProvider>
      <Navigation/>
      <Summary/>
      <AvailableProducts/>
      <FooterComponent/>
    </ProductProvider>
)

}

export default App;

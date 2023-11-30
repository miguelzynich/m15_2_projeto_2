import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/header/Header.js';
import OffBanner from './Components/offBanner/OffBanner';
import ProductsPopular from './Components/productsPopular/ProductsPopular';
import SlickerCategories from './Components/slickerCategories/SlickerCategories';
import SlickerSlides from './Components/slickerSlides/slickerSlides.js';
import 'tachyons/css/tachyons.min.css';


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/products")
    .then(res => res.json())
    .then((result) => {
      setIsLoaded(true);
      setItems(result);
    }, (error) => {
      setIsLoaded(true);
      setError(error);
    })
  }, [])

  if (error) {
    return <div>Erro: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Carregando...</div>;
  } else {
      return (
        <div className="App">
          <Header />
          <SlickerSlides />
          <OffBanner />
          <SlickerCategories />
          <ProductsPopular items={items} />
        </div>
      );
  }
}

export default App;
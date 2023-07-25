import styles from './App.module.css';
import { Main } from './components/Main/Main';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router';
import { Delivery } from './components/pages/Delivery/Delivery';
import { Contacts } from './components/Contacts/Contacts';
import { About } from './components/About/About';
import { Basket } from './components/Basket/Basket';
import { Catalog } from './components/pages/Catalog/Catalog';
import { LookBook } from './components/pages/LookBook/LookBook';

import { Product } from './components/pages/Product/Product';
import { Order } from './components/pages/Order/Order';
import { useState, createContext } from 'react';
import { useEffect } from 'react';

 export const CartContext = createContext();
const  App = () => {
 
  const [weather, setWeather] = useState({});
  const [showMenu, setShowMenu] = useState(false);

  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
        .then(response => response.json())
        .then((data) => {
          const dataWeather = {
            city: "Minsk",
            temperature: data.current_weather.temperature,
            units: data.hourly_units.temperature_2m,
            time: data.current_weather.time,
          }
          setWeather(dataWeather);
          //console.log(dataWeather)
        })
    })
  }
    , [])

  return (
    <CartContext.Provider value={{totalCount, setTotalCount}}>
    <div className={styles.app}>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} weather={weather}/>
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:url' element={<Catalog/>}/>
        <Route path='/delivery' element={<Delivery/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/lookbook' element={<LookBook/>} />
        <Route path='/:url/:id' element={<Product/>}/>
        <Route path='/order' element={<Order/>} />      
      </Routes>
      
      <Footer/>
      
    </div>
    </CartContext.Provider>
  );
}

export default App;

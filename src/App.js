import styles from './App.module.css';
import { Main } from './components/Main/Main';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router';
import { Delivery } from './components/pages/Delivery/Delivery';
import { Contacts } from './components/Contacts/Contacts';
import { About } from './components/About/About';
import { Basket } from './components/Basket/Basket';
import { Catalog } from './components/pages/Catalog/Catalog';
import { LookBook } from './components/pages/LookBook/LookBook';
import { useLocation } from 'react-router';
import { Product } from './components/pages/Product/Product';


const  App = () => {
  let { state } = useLocation();

  return (
    <div className={styles.app}>
      <Header/>
      
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
        
        
      </Routes>
      
      <Footer/>
      
    </div>
  );
}

export default App;

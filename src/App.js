

import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import PromocionApp from './components/PromocionApp';

function App() {
  return (
    <div className="">
      <NavBar/>
      <ItemListContainer greeting={"No se encontraron productos"}/>
      <PromocionApp/>
      <Footer/>
    </div>
     
   
   
   );
}

export default App;

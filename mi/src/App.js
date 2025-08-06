import Home from './nav/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Store from './nav/Store';
import Login from './nav/Login';
import Mobile from './nav/Mobile';
import Tablte from "./nav/Tablet's";
import Tv from './nav/Tv';
import Show from './nav/Show';
import Admi from './nav/Admi';
import Formcrete from './Formcrete';
import Update from './Update';
import GetData from './get';
import ProductList from './nav/PoductList';
import Tabletproduct from './Tabletproduct';
import Tabletupdate from './Tabletupdate';
import Tabletcreate from './Tabletcreate';
import Tvcreate from './Tvcreate';
import Tvproduct from './Tvproduct';
import Tvupdatepro from './nav/Tvupdatepro';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/user' element={<Login></Login>}/>
        <Route path='/mobile' element={<Mobile></Mobile>}/>
        <Route path='/tablets' element={<Tablte></Tablte>}/>
        <Route path='/Tv' element={<Tv></Tv>}/>
        <Route path='/car' element={<Show></Show>} />
        <Route path='/ad' element={<Admi></Admi>} />
        <Route path='/cre' element={<Formcrete></Formcrete>} />
        <Route path='/update' element={<Update></Update>} />
        <Route path='/GET' element={<GetData></GetData>}/>
        <Route path='/update/:id' element={<Update></Update>} loader={({params})=>fetch(`http://localhost:4000/update/${params.id}`)}/>
        <Route path='/moblieproduct' element={<ProductList></ProductList>} />
        <Route path='/tabletproduct' element={<Tabletproduct></Tabletproduct>}/>
        <Route path='/tableteupdate/:id' element={<Tabletupdate></Tabletupdate>} loader={({params})=>fetch(`http://localhost:4000/updateTablete/${params.id}`)}/>
        <Route path='/tabcreate' element={<Tabletcreate></Tabletcreate>}/>
        <Route path='/tvproduct' element={<Tvproduct></Tvproduct>}/>
        <Route path='/tvcreate' element={<Tvcreate></Tvcreate>}/>
        <Route path='/tvupdate/:id' element={<Tvupdatepro></Tvupdatepro>} loader={({params})=>fetch(`http://localhost:4000//tvupdate/${params.id}`)}/>

      </Routes>
      {/* <Footer></Footer> */}
      
    </BrowserRouter>
    
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Orders/Order';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import IfAuthExist from './components/IfAuthExist/IfAuthExist';

function App() {
  return (
    <div className='app_container'>
     <Header></Header>
     <Routes>
      <Route path='/' element={<Shop></Shop>}></Route>
      <Route path='/home' element={<Shop></Shop>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/orders' element={<Order></Order>}></Route>
      <Route path='/inventory' element={
        <RequiredAuth>
          <Inventory></Inventory>
        </RequiredAuth>
       
      }></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/sign-up' element={
        <IfAuthExist>
          <SignUp></SignUp>
        </IfAuthExist>
      }></Route>
      <Route path='/login' element={
        <IfAuthExist>
          <Login></Login>
        </IfAuthExist>
        }></Route>
     
     </Routes>
    </div>
  );
}

export default App;

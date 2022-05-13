import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/MarketPlace/login'
import Register from './component/MarketPlace/register'
import Buyer from './component/MarketPlace/buyer'
import Seller from './component/MarketPlace/seller';
import ForgotPassword from './component/MarketPlace/forgotPassword'
import HomePage from './component/MarketPlace/homePage'
import ViewProduct from './component/MarketPlace/viewProduct'
import Rfq from './component/MarketPlace/rfq'
import OrderStatus from './component/MarketPlace/orderStatus'
import Landing from "./pages/landing/Landing";
import ContactUs from "./pages/contactus/ContactUs";
import Faq from "./pages/faq/Faq";
import Nav from "./component/nav/Nav";
import ProdSourcing from "./pages/prodsourcing/ProdSourcing";
import TofaAcademy from "./pages/tofaacademy/TofaAcademy";
import AcademyForm from "./pages/academyform/AcademyForm";
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/buyer" element={<Buyer />} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/seller" element={<Seller />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
        <Route exact path="/market" element={<HomePage/>} />
        <Route exact path="/rfq" element={<Rfq/>} />
        <Route exact path="/products" element={<ViewProduct/>} />
        <Route exact path="/order" element={<OrderStatus/>} />
        <Route exact path='/landing' element={<Landing/>} />
        <Route exact path='/contactus' element={<ContactUs/>} />
        <Route exact path='/faq' element={<Faq/>} />
        <Route exact path='/nav' element={<Nav/>} />
        <Route exact path='/prodsourcing' element={<ProdSourcing/>} />
        <Route exact path='/tofaacademy' element={<TofaAcademy/>} />
        <Route exact path= 'academyform' element={<AcademyForm/>} />
        
      </Routes>
    </BrowserRouter>
      
     
   
  );
}


export default App;

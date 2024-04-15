

import { BrowserRouter,Route,Routes } from "react-router-dom"
import Akount from "./pages/Akount"
import Home from "./pages/Home"
import Delivery from "./pages/Delivery"
import Card from "./pages/Card"
import Faq from "./pages/Faq"
import Pay from "./pages/Pay"
import Order from "./pages/Order"






function App() {
return(
  <BrowserRouter>
   
     <Routes>
      <Route path={"/"} element = {<Akount/>}/>
      <Route path={"*"} element={<Home/>}/>
      <Route path={"/delv"}element={<Delivery/>}/>
      <Route path={"/faq"}element={<Faq/>}/>
      <Route path={"/crad"}element={<Card/>}/>
      <Route path={"/pay"} element={<Pay/>}/>
      <Route path={"/order"}element={<Order/>}/>
      </Routes>
       
       
    
  </BrowserRouter>
)
}


export default App

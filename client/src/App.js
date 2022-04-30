
import './App.css';
import Signin from './component/Signin';
import Index from './component/Index';
import  Register from './component/Register';
import Navbar from './component/Navbar';
import Reservation from './component/Reservation';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
 
    <>
    <Navbar/>
<Routes>


<Route exact path="/signin" element={ <Signin/>}>
   
    </Route>


<Route path="/" element={<Index/>}>

</Route>
 
    <Route  path="/register" element={ <Register/>}>
      
   
    </Route>
    <Route  path="/ragistration" element={<Reservation/>}>

    </Route>
 
</Routes>
</>
  );
}

export default App;

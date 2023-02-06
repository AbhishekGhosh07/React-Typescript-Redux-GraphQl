

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import HeaderContainer from './containers/HeaderContainer';
import MyNavbar from './components/MyNavbar';
function App(){
  
return(<>
  <div className="App">
    {/* <ControlContainer/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MyNavbar/>}>
      <Route path="/login" element={<LoginContainer/>}/>
      <Route path="/home" element={<HomeContainer/>}/>
      </Route>
      
      


    </Routes>
    </BrowserRouter>
    
  </div>
</>)
}

export default App;


import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import HeaderContainer from './containers/HeaderContainer';
function App(){
  
return(<>
  <div className="App">
    {/* <ControlContainer/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeaderContainer/>}/>
      <Route path="/login" element={<LoginContainer/>}/>
      <Route path="/home" element={<HomeContainer/>}/>
      
      


    </Routes>
    </BrowserRouter>
    
  </div>
</>)
}

export default App;
import React, { useState } from 'react';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
import LoginContainer from  './containers/LoginContainer';
function App(){
  
return(<>
  <div className="App">
    <LoginContainer/>
    <HeaderContainer/>
  <HomeContainer/>
  </div>
</>)
}

export default App;
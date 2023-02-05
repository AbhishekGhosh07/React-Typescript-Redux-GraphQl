import React, { useState } from 'react';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
import LoginForm from './components/LoginForm';
function App(){
  
return(<>
  <div className="App">
    <LoginForm/>
    <HeaderContainer/>
  <HomeContainer/>
  </div>
</>)
}

export default App;
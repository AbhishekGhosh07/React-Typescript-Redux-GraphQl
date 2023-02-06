import HomeContainer from "../containers/HomeContainer";
import HeaderContainer from "../containers/HeaderContainer";
import LoginContainer from "../containers/LoginContainer";

function Control(props){
  console.log("Control",props);
    return(<>
        <div>
          {(props.user.length === 0)?<LoginContainer/>:null}
          
          {(props.user.length > 0)?<><HeaderContainer/>
          <HomeContainer/>
          </>
          :null}
          
        </div>
      </>)
      }
export default Control;
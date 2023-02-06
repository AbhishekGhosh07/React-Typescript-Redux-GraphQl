import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Header(props){
    let navigate = useNavigate();
    console.log("Header",props);
    console.log("User Header",props.user);
    
   //console.log("H",props.user[0].users.username);
    return(<>
        <center>
        <h4>No. of Items in Cart  --{props.cart.length}</h4>
     <h4>No. of Items in orders--{props.order.length}</h4>
        {(props.user.length==0)? <Button variant="primary" onClick={()=>navigate("/login")}>Login</Button>:null}
    

        </center>

    
    
     

     

    
     
    
    </>)
}

export default Header;
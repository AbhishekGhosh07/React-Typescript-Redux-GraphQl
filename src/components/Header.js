function Header(props){
    
    console.log("Header",props);
    console.log("User Header",props.user);
    
   //console.log("H",props.user[0].users.username);
    return(<>
    
    {

     (props.user.length > 0)?<><h4>No. of Items in Cart  --{props.cart.length}</h4>
     <h4>No. of Items in orders--{props.order.length}</h4>
     
     <h4>Username--{props.user[0].users.username}</h4>

     </>
     :null
}

    
     
    
    </>)
}

export default Header;
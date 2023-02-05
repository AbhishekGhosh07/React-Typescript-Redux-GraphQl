function Header(props){
    
    console.log("Header",props);
    const user1 = props.user[0].idPass;
const username = user1.username;
const password = user1.password;
    return(<>
    
    

    {/* // (props.user.length > 0)?<><h4>No. of Items in Cart  --{props.cart.length}</h4>
    // <h4>No. of Items in orders--{props.order.length}</h4>
    // <h4>Username--{props.user.length}</h4>
    // </>
    // :null
     */}
    <h4>{username}</h4>
     
    
    </>)
}

export default Header;
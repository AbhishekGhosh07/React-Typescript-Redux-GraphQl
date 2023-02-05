function Header(props){
    
    
    return(<>
    {
    (props.user.length > 0)?<><h4>No. of Items in Cart  --{props.cart.length}</h4>
    <h4>No. of Items in orders--{props.order.length}</h4>
    <h4>Username--{props.user.length}</h4>
    </>
    :null
    
    }<br/>
   
    
    </>)
}

export default Header;
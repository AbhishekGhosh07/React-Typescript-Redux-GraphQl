function Header(props){
    return(<>
    <h4>No. of Items in Cart  --{props.cart.length}</h4><br/>
    <h4>No. of Items in orders--{props.order.length}</h4>
    <h4>Usename--{props.user.length}</h4>
    
    </>)
}

export default Header;
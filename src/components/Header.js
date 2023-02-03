function Header(props){
    return(<>
    <h4>{props.cart.length}</h4><br/>
    <h4>{props.order.length}</h4>
    
    </>)
}

export default Header;
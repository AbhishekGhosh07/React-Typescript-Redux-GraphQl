import {connect} from 'react-redux'
import Home from '../components/Home'
import {addToCart,removeToCart,addToOrder,removeToOrder} from '../Services/Actions/actions'

const mapStateToProps=(state)=>({
    
    order:state.orderDetails,
    cart:state.cardItems

    
    

})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data)),
    addToOrderHandler:data=>dispatch(addToOrder(data)),
    removeToOrderHandler:data=>dispatch(removeToOrder(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

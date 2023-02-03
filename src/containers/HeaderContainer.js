import {connect} from 'react-redux'
import Header from '../components/Header'

const mapStateToProps=state=>({
    cart:state.cardItems,
    order:state.orderDetails
    
})

const mapDispatchToProps=dispatch=>({
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)


//export default Home;
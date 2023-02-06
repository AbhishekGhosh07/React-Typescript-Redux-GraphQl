import {connect} from 'react-redux'
import Control from '../components/Control'

const mapStateToProps=state=>({
    cart:state.cardItems,
    order:state.orderDetails,
    user:state.cred,

    
})

const mapDispatchToProps=dispatch=>({
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Control)
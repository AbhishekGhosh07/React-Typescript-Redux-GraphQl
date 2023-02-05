import {connect} from 'react-redux'
import LoginForm from '../components/LoginForm'
import {addUsername} from '../Services/Actions/actions'

const mapStateToProps=(state)=>({
    
    cred:state.credentials
    })

const mapDispatchToProps=dispatch=>({
    
    addToUsernameHandler:data=>{
        console.log("Dispatched")
        dispatch(addUsername(data))},
    })

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)

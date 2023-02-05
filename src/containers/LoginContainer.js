import {connect} from 'react-redux';
import Login from '../components/Login'
import { addUser } from '../Services/Actions/actions';

const mapStateToProps=(state)=>({
     user:state.cred,
})
const mapDispatchToProps=dispatch=>({
    addUserHandler:data=>dispatch(addUser(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)
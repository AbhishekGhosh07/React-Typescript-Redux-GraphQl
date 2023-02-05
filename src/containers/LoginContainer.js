import LoginForm from '../components/LoginForm';
import {connect} from 'react-redux';
import { addUsername } from '../Services/Actions/actions';

const mapStateToProps=(state)=>({
    cred:state.credentials
})


const mapDispatchToProps=dispatch=>({
    addToUsernameHandler:data=>dispatch(addUsername(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
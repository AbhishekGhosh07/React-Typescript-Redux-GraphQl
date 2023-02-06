import { connect } from "react-redux";
import MyNavbar from "../components/MyNavbar";

const mapStateToProps=(state)=>({

    user:state.cred,
})

const mapDispatchToProps=dispatch=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(MyNavbar);
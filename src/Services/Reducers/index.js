import {combineReducers} from 'redux'
import {cardItems,orderDetails,cred} from "./reducers";

export default combineReducers({
    cardItems,
    orderDetails,
    cred
})
import {combineReducers} from 'redux'
import {cardItems,orderDetails,credentials} from "./reducers";

export default combineReducers({
    cardItems,
    orderDetails,
    credentials
})
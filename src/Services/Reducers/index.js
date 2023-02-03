import {combineReducers} from 'redux'
import {cardItems,orderDetails} from "./reducers";

export default combineReducers({
    cardItems,
    orderDetails
})
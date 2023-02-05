import { ADD_TO_CART,REMOVE_TO_CART,ADD_TO_ORDER,REMOVE_TO_ORDER, ADD_USERNAME} from "../constants"

export const addUser=(data)=>{
    return{
        type:ADD_USERNAME,
        data:data
    }
}

export const addToCart=(data)=>{
    console.log("action",data);
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const removeToOrder=()=>{
    return{
        type:REMOVE_TO_ORDER
    }
}

export const removeToCart=()=>{
    return{
        type:REMOVE_TO_CART,
    }
}
export const addToOrder=(data)=>{
    console.log("order action",data);
    return{
        type:ADD_TO_ORDER,
        data:data
    }
}

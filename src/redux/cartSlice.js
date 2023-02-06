import { createSlice} from "@reduxjs/toolkit";
import location from "../location.json";




let cartStorage = JSON.parse(localStorage.getItem("cart"))
let deliveryarea = sessionStorage.getItem("deliveryarea")


const initialState={
    itemsInCart: cartStorage?.itemsInCart ? cartStorage?.itemsInCart : [],
    cartItemsnum: cartStorage?.cartItemsnum ? cartStorage?.cartItemsnum :0,
    totalCount: cartStorage?.totalCount ? cartStorage?.totalCount : 0,
    showbasket: false,
    showCartPage: false,
    Deliverycharges: deliveryarea?.Deliverycharges ? deliveryarea?.Deliverycharges : "",
    minOrder: deliveryarea?.minOrder ? deliveryarea?.minOrder : 0  
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const itemInCartIndex = state.itemsInCart.findIndex((item) => item._id === action.payload._id);
            if(itemInCartIndex >= 0)
            {   
                state.itemsInCart[itemInCartIndex].quantity +=1
                state.cartItemsnum +=1
                state.totalCount += state.itemsInCart[itemInCartIndex].price
                state.showbasket=true
            }
            else {
                let _id= action.payload._id
                let name =action.payload.name
                let price = action.payload.price
                let updatedproduct = {_id,price,quantity:1}
                state.itemsInCart.push(updatedproduct);
                state.cartItemsnum += 1
                state.totalCount +=updatedproduct.price*updatedproduct.quantity
                state.showbasket=true
            }
            let {itemsInCart,cartItemsnum,totalCount} = state
            localStorage.setItem("cart",JSON.stringify({itemsInCart,cartItemsnum,totalCount}))
        },
        incrementCart:(state, action) =>{
            const itemInCartIndex = state.itemsInCart.findIndex((item) => item._id === action.payload._id);
            state.itemsInCart[itemInCartIndex].quantity +=1
            state.cartItemsnum +=1
            state.totalCount += state.itemsInCart[itemInCartIndex].price
            let {itemsInCart,cartItemsnum,totalCount} = state
            localStorage.setItem("cart",JSON.stringify({itemsInCart,cartItemsnum,totalCount}))        
        },
        decrementCart:(state, action) =>{
            const itemInCartIndex = state.itemsInCart.findIndex((item) => item._id === action.payload._id);
            if(state.itemsInCart[itemInCartIndex].quantity >= 1){
                state.itemsInCart[itemInCartIndex].quantity -=1
                state.cartItemsnum -=1
                state.totalCount -= state.itemsInCart[itemInCartIndex].price
                let {itemsInCart,cartItemsnum,totalCount} = state
                localStorage.setItem("cart",JSON.stringify({itemsInCart,cartItemsnum,totalCount}))
                if(state.itemsInCart[itemInCartIndex].quantity < 1){
                    const updatedItemsCart = state.itemsInCart.filter((item) => item._id !== action.payload._id);
                    state.itemsInCart=updatedItemsCart;
                    let {itemsInCart,cartItemsnum,totalCount} = state
                    localStorage.setItem("cart",JSON.stringify({itemsInCart,cartItemsnum,totalCount}))
                }
            }  
        },
        showBasket:(state) => {
            if(state.cartItemsnum > 0){
                state.showbasket=true
                state.showCartPage=true
            }   
            else{
                state.showbasket=false
                state.showCartPage=false
            }  
        },
        removeCart:(state) => {    
                  state.itemsInCart= []
                  state.cartItemsnum=0
                  state.totalCount=0
                  let {itemsInCart,cartItemsnum,totalCount} = state
                  localStorage.setItem("cart",JSON.stringify({itemsInCart,cartItemsnum,totalCount}))
        },
        checkAreaName:(state,action) => {
            if(action.payload){
                console.log(action.payload);
            let loc = action.payload
            state.Deliverycharges = loc.delivery_charges
            state.minOrder = loc.min_order
            let {Deliverycharges,minOrder}= state
            sessionStorage.setItem('deliveryarea',JSON.stringify({Deliverycharges,minOrder}))
            sessionStorage.setItem('areaname',loc.name)
            }
        }

    }
    
})

export const {addToCart,incrementCart,decrementCart,showBasket,removeCart,checkAreaName} = cartSlice.actions;
export default cartSlice.reducer;
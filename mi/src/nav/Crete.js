import{createSlice} from"@reduxjs/toolkit"
const product=createSlice({
    name:"cart",
    initialState:[],
reducers:{
    addCart(state,action){
        const newproduct=action.payload
        const exting=state.find((item)=>item._id===newproduct._id)
        if(exting){
            exting.quantity+=1
        }
        else{
            state.push({
                _id:newproduct._id,
                title:newproduct.title,
                img:newproduct.img,
                price:newproduct.price,
                quantity:1
            })
        }
    },
    deleteTocart(state,action){
        const idTodel=action.payload
        return state=state.filter(item =>item._id!==idTodel)
    },
      updateCart:(state, action)=>{
      const{id,quantity}=action.payload;
      const itemToup=state.find((item)=>item._id === id);
      if(itemToup){
      itemToup.quantity = quantity;
      }
    }
}
})
export default product.reducer
export const{addCart,deleteTocart,updateCart}=product.actions
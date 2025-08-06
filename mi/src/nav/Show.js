import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteTocart ,updateCart} from "./Crete";
import Nav from './Nav';
import './show.css'


function Show() {
    const MobileData = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const removeItem = (id) => {
        dispatch(deleteTocart(id));
    };
    const increment=(id,quantity)=>{
      dispatch(updateCart({id,quantity:quantity +1}))
    }
    const dec=(id,quantity)=>{
      if(quantity>=1){
              dispatch(updateCart({id,quantity: quantity-1}))
      }
    }
    if(MobileData.length===0){
      return(
         <div>
              <Nav/>
                <br /><br />
                <h1 style={{ textAlign: 'center', color: 'gray' }}>Your Cart is Empty</h1>
                <br /><br />
            </div>
      )
    }
    return (
        <div>
          <Nav></Nav>
          <br>
          </br>
          <br>
          </br>
            <div className='container'>
         <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Image</th>
      <th scope='col'>quantity</th>
      <th scope='col'>Confirm order's</th>
    </tr>
  </thead>
  <tbody>
    {
      MobileData.map((bag) => (
       
        <tr key={bag._id}>
          
          <td><h3>{bag.title}</h3></td>
          <td><h6>{bag.price}</h6></td>
          <td><img src={bag.img} alt='imag' style={{ height: "100px", width: "100px" }} />
           <button style={{width:"30px"}} onClick={() => increment(bag._id, bag.quantity)}>+</button>
          <button onClick={() => dec(bag._id, bag.quantity)}>-</button> </td>
          <td>{bag.quantity}</td>
<td>           <button onClick={()=>removeItem(bag._id)}> Delete</button></td>
        
        </tr>
      ))
    }
    
  </tbody>
</table>


            </div>
            
            
            <button className='btn btn-warning'>Confirm order</button>
        </div>
        
    );
}

export default Show;

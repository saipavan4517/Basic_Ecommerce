import React,{useState} from 'react'
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';


const CartPresentational = (props) => {

    const [CartState, setcartState] = useState(false)      

    const AddCartHandler=()=>{
        setcartState(!CartState)  
    }
    const RemoveCartHandler=()=>{
        setcartState(!CartState)  
    }

   
    return (
        <div className="cart-container">  
            { 
            CartState ? 
             <Button variant="contained" onClick={RemoveCartHandler}><RemoveIcon></RemoveIcon></Button>
             :
             <Button variant="contained" onClick={AddCartHandler}><AddShoppingCartIcon />ADD TO CART</Button>
            }
        </div>
    )
}

export default CartPresentational

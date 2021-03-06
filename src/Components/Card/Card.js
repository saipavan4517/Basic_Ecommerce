import React from 'react'
import './Card.css'
import Cart from '../Cart/Cart'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';



const Card = ({key,name,price}) => {

    return (
        <div className="card-container">
             <div className="card-content">
              <div className="image-container">
                 <img src={require(`../images/${name}.jpg`).default} height={300} width={250}/>
               </div>    
               <span className="product-name">{name}</span>
               <span><AttachMoneyIcon />{price}</span>
              <Cart />
           </div>
        </div>
    )
}

export default Card

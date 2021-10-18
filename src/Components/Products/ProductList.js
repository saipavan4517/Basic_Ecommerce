import { display } from '@mui/system'
import React from 'react'
import  Card from '../Card/Card'



 
export const Products =
[{ id:3423,name : "ShirtPicForBE",price : "95"}, 
{id:31423, name : "TshirtPicForBE",price : "145" },
{id:34231,name : "TshirtPicForBE" ,price : "45"}
]

const ProductList = () => {
    return (
        <div>
              {  
             Products.map((product) =>
             <div key={product.id} style={{display:"inline-flex"}}>
              <Card  name = {product.name} price ={product.price}/>
              </div>
             )
            }           
        </div>
    )
}

export default ProductList

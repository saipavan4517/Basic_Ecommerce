import React from 'react'
import  Card from '../Card/Card'
import Cart from '../Cart/Cart'


 
export const Products =
[{ id:3423,name : "Shirt",price : "95"}, 
{id:31423, name : "pant",price : "145" },
{id:34231,name : "Tshirt" ,price : "45"}
]

const ProductList = () => {
    return (
        <div>
              {  
             Products.map((product) =>
              <Card key={product.key}  name = {product.name} price ={product.price}/>
             )
            }           
        </div>
    )
}

export default ProductList

import React from 'react'
import {phoneData} from "./Product.data"
import {Card, Button} from "react-bootstrap"
import { useState } from 'react'
const Products = () => {
    const[items,setItems] = useState(phoneData);
    const decre = (id) => {
        const newItem = items.map((item) =>
        item.id === id && item.qty>1 ?{...item, qty: item.qty - 1}:item
        );
        setItems(newItem);
    }
    const incre = (id) => {
        const newItem = items.map((item) =>
        item.id === id  ?{...item, qty: item.qty + 1}:item
        );
        setItems(newItem);
    }

    
    
  return (
    <div>
        <h1 className="bg-info">Products</h1>
        {items.map((item)=>(
            
         <div className="d-inline-flex p-2" key={item.id}>
             <Card  className='shadow p-3 mb-5 bg-body rounded' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require(`./assets/${item.image}.png`)}  />
        <Card.Body>
        <Card.Title>{item.model}</Card.Title>
        <Card.Text>
        {item.desc}
        </Card.Text>
        <div>
            <p>Qty
            <Button onClick={()=>decre(item.id)} className='m-1'>-</Button >{item.qty}<Button onClick={()=>incre(item.id)} className='m-1'>+</Button>
            </p>
           
        </div>
        <h5>{item.price}</h5>
        <Button variant="primary">Add Cart</Button>
        </Card.Body>
        </Card>
         </div> 
       
    
        


        ))}
        
        
       

    </div>
  )
}

export default Products
import React ,{useState} from "react";
import Axios from "axios";
var Manage =(props)=>{
    
    const [item_name,setName]=useState(props.product.item_name)
    const [item_description,setDescription]=useState(props.product.item_description)
    const [item_quantity,setQuantity]=useState(props.product.item_quantity)
    const [item_price,setPrice]=useState(props.product.item_price)
    const [item_image,setImage]=useState(props.product.item_image)
    const [id_item,setID]=useState(props.product.id_item)
    
    var add =() =>{
        
        Axios.post("http://localhost:1337/items",{item_name:item_name,item_description:item_description,item_quantity:item_quantity,item_price:item_price,item_image:item_image})
        .then((res)=>{
            console.log("Added")
        })
    }
    var update =() =>{
        Axios.put(`http://localhost:1337/items/${id_item}`,{item_name:item_name,item_description:item_description,item_quantity:item_quantity,item_price:item_price,item_image:item_image})
        .then((res)=>{
            console.log("updated")
        })
    }

    return(
        <div>
        <input  defaultValue={item_name} placeholder="type your item name"  onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <input defaultValue={item_description} placeholder="type the description"  onChange={(e)=>{
            setDescription(e.target.value)
        }} />
        <input defaultValue={item_quantity} placeholder="insert your quantity"  onChange={(e)=>{
            setQuantity(e.target.value)
        }} />
        <input defaultValue={item_price} placeholder="insert your price"  onChange={(e)=>{
            setPrice(e.target.value)
        }} />
        <input defaultValue={item_image} placeholder="image url"  onChange={(e)=>{
           setImage(e.target.value)
        }} />
         <button  onClick={()=>{
            if(id_item !== undefined) {
                update();
            }else {
            add();}
         }}>Save</button>
        </div>
    )
}
export default Manage
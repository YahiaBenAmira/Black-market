import React, { useState } from "react"
import Axios from "axios"
import Manage from "./Manage.jsx";
var Market = (props) => {
  const [selectedProduct, setSelectedProduct] = useState({})

 
  var del = (id) => {
    Axios.delete(`http://localhost:1337/items/${id}`)
      .then((res) => {
        console.log("oh you deleted me ")
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      {props.items.map((e) => {
        return (
          <div key={e.id_item}>
            <ul className="l1">
              <li>ItemName: {e.item_name}</li>
              <div>
                <li>Description: {e.item_description}</li>
              </div>
              <div>
                <li>Quantity: {e.item_quantity}</li>
              </div>
              <div>
                <li>Price: {e.item_price}$ </li>
              </div>
              <div id="img">
                <img  src={e.item_image} />
              </div>
              <div>
                <span onClick={() => {
                  del(e.id_item)
                }}>❌</span>
                <span onClick={() => { setSelectedProduct(e) }}>✍️</span>

              </div>
            </ul>
          </div>


        )
      })}
      <Manage product={selectedProduct}  key={selectedProduct.id_item}/>
    </div>
  )
}
export default Market
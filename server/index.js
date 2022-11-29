const express = require('express');
const db = require('./db');
const app = express();
const port = 1337;
const cors = require("cors")
app.use(express.json())
app.use(cors())



 app.get('/items',(req,res)=>{
    db.query('SELECT * FROM items', function(err,result){
     if(err){
     console.log(err)}
     res.send(result)
    })
 }
 )
 app.post('/items',(req,res)=>{
  db.query(`INSERT INTO items (item_name ,item_description,item_quantity,item_price,item_image) VALUES ('${req.body.item_name}','${req.body.item_description}',${req.body.item_quantity},${req.body.item_price},'${req.body.item_image}')`,
  (err,result)=>{
    if (err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
})

app.delete('/items/:id_item',(req,res)=>{
  console.log(req.params)
  db.query(`DELETE FROM items WHERE id_item=${req.params.id_item}`,(err,result)=>{
    if (err){
      console.log(err)
    }else{
      res.send("no way you deleted me")
      console.log("no way you deleted me")
    }
  })
})
app.put('/items/:id_item',(req,res)=>{
  db.query(`UPDATE items SET item_name ="${req.body.item_name}",item_description="${req.body.item_description}",item_quantity=${req.body.item_quantity}, item_price=${req.body.item_price}, item_image="${req.body.item_image}" WHERE id_item=${req.params.id_item}`,(err,result)=>{
    if (err){
      console.log(err)
    }else{
      res.send("updated yey!")
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
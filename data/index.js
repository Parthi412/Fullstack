const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Connteted")
})
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://parthi:16@cluster0.lxll3dq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const details=client.db("vali").collection("in")
    const moblie=client.db("CartItem").collection("Moblie")
app.post("/pos",async(req,res)=>{
    const data=req.body
    const result= await details.insertMany([data])
    res.send(result)
})
app.get("/all",async(req,res)=>{
    const respose=details.find()
    const result= await respose.toArray()
    res.send(result)  
})
app.get("/all/:id",async(req,res)=>{
     const id=req.params.id
          const filter={_id:new ObjectId(id)}
          const restult=await pro.findOne(filter)
          res.send(restult);
})
app.patch("/up/:id",async(req,res)=>{
  const id=req.params.id
  const update=req.body
  const filter={_id:new ObjectId(id)}
     const updateDoc={$set: {...update}}
      const option={upsert:true}
      const result=await details.updateOne(filter,updateDoc,option)
      res.send(result) 
})
app.delete("/delte/:id",async(req,res)=>{
  const id=req.params.id
  const delet=req.body
  const filter={_id:new ObjectId(id)}
  const option={upsert:true}
  const restult=await details.deleteOne(filter,delet,option)
  res.send(restult)
})
//mobile cart item
app.post("/mobile",async(req,res)=>{
const data=req.body
const result= await moblie.insertOne(data)
res.send(result)
})
//get the all the mobile
app.get("/allmobile",async(req,res)=>{
  const data=moblie.find()
  const result=await data.toArray()
  res.send(result)
})
//get the one mobile
app.get("/onemobile/:id",async(req,res)=>{
     const id=req.params.id
          const filter={_id:new ObjectId(id)}
          const restult=await moblie.findOne(filter)
          res.send(restult);
})
//update mobile
app.patch("/upmobile/:id",async(req,res)=>{
  const id=req.params.id
  const update=req.body
  const filter={_id:new ObjectId(id)}
    const updateDoc={$set:{...update}}
    const option={upsert:true}
    const result=await moblie.updateOne(filter,updateDoc,option)
    res.send(result)
  
})
//delte mobile
app.delete("/onedelete/:id",async(req,res)=>{
   const id=req.params.id
   const data=req.body
  const filter={_id:new ObjectId(id)}
  const option={upsert:true}
  const restult=await moblie.deleteOne(filter,option,data)
  res.send(restult)
})

// tablte Cart item
const Tablet=client.db("CartItem").collection("Tablets")
app.post("/tablet",async(req,res)=>{
  const data=req.body
  const restult=await Tablet.insertOne(data)
  res.send(restult)
  
})
//get the tablet all
app.get("/alltablet",async(req,res)=>{
  const data=Tablet.find()
  const restult=await data.toArray()
  res.send(restult)
})
//get the one tablet
app.get('/onetablet/:id',async(req,res)=>{
  const data=req.params.id
  const filter={_id:new ObjectId(data)}
  const result=await Tablet.findOne(filter)
  res.send(result)
  
})
//update the tablte
app.patch("/updateTablete/:id",async(req,res)=>{
  const data=req.params.id
  const update=req.body
  const filter={_id:new ObjectId(data)}
   const updateDoc={$set: {...update}}
      const option={upsert:true}
      const restult=await Tablet.updateOne(filter,updateDoc,option)
      res.send(restult)
})
//delete the tablte
app.delete("/deleteTablete/:id",async(req,res)=>{
const id=req.params.id
  const delet=req.body
  const filter={_id:new ObjectId(id)}
  const option={upsert:true}
  const restult=await Tablet.deleteOne(filter,delet,option)
  res.send(restult)
})
//tv product
const tv=client.db("CartItem").collection("Tv")
app.post("/tvproduct",async(req,res)=>{
  const data=req.body
  const result= await tv.insertOne(data)
  res.send(result)
})
//get all tv product
app.get("/tvall",async(req,res)=>{
  const data=tv.find()
  const result=await data.toArray()
  res.send(result)

})
//get one tv
app.get("/tvone/:id",async(req,res)=>{
  const id=req.params.id
  const filter={_id:new ObjectId(id)}
  const result=await tv.findOne(filter)
  res.send(result)
})
//update the tv product
app.patch("/tvupdate/:id",async(req,res)=>{
  const id=req.params.id
  const data=req.body
  const filter={_id:new ObjectId(id)}
  const updateDoc={$set:{...data}}
  const option={upsert:true}
  const result=await tv.updateOne(filter,updateDoc,option)
  res.send(result)
})
//delete the tv product
app.delete("/tvdelete/:id",async(req,res)=>{
  const id=req.params.id
  const delet=req.body
  const filter={_id:new ObjectId(id)}
  const option={upsert:true}
  const result=await tv.deleteOne(filter,option,delet)
  res.send(result)
})
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   
  }
}
run().catch(console.dir);
app.listen(4000,()=>{
console.log("http://localhost:4000");  
})






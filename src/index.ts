import express from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    console.log("Hello world")
    res.json({message:"Jellossss"})
})


app.listen(PORT,()=>{
    console.log("Server listening on PORT 3000")
    console.log("http://localhost:3000")
})
const express =require("express")

const PORT = process.env.PORT ||8000

const app = express();

const testingRoutes = require("../routes/testingRoutes");
app.use(express.json())

app.use('/api-testing',(req,res)=>{
    return res.status(200).json({success:true,message:"Data gotten securely"});
})

app.use('/api',testingRoutes);

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})
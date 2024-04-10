
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')

const app = express();


app.use(express.json())
app.use(cors({origin:true}))


// routes
app.use('/user',userRouter)



// 404 erro-page setting up
app.use((req,res)=>{
    res.send({error:"page not found"})
})


mongoose.connect('mongodb://localhost:27017/authMyOwn')
.then(()=>{
    console.log(`successfully connected to mongoDB`);
    app.listen(8000,()=>{
        console.log(`server running on port - 8000`);
    })
})
.catch((err)=> {
    console.log(` found error while connecting to DB`);
})

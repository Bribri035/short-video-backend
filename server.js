import express from 'express'
import mongoose from 'mongoose'
import Videos from './dbModel.js'
//App Config
const app = express()
const port = process.env.PORT||9000
const connection_url = 'mongodb+srv://nodeServer:jvDuxoVRv0XsEtmE@cluster0.bsjcc1v.mongodb.net/?retryWrites=true&w=majority'

//Middleware

//DB Config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreatIndex:true,
    useUnifiedTopology:true
})

//API Endpoints
app.post('/v2/posts' , (req , res)=>{
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data)=>{
        if (err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

app.get('/v2/posts' , (req , res)=>{
    Videos.find((err,data)=>{
        if(err)
            res.status(500).send(err)
        else
            res.status(200).send(data)
    })
})


//Listener

app.listen(port, ()=> console.log('lisening on localhost: ${port}'))
//import express

const express = require('express')

//create app using express

const app = express()

//import cors

const cors = require('cors')

const jwt = require('jsonwebtoken');
//import dataservices
const dataservices = require('./services/dataservices')
//use json parser for server responses

app.use(express.json())

//using cors specify the origin to server

app.use(cors({
    origin:'http://localhost:4200'
}))

//setup a port number
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.listen(3000,()=>{
    console.log('listening on port:3000');
})

//application middleware
const appMiddleware=(req,res,next)=>{
    console.log('application specific middleware');
    next()
}

app.use(appMiddleware)

const jwdrouterMiddleware =(req,res,next)=>{
    try{
        console.log('router specific middleware');
        const token = req.headers['x-acess-token'];
        const data = jwt.verify(token,'superkey2023')//
        console.log(data);
        next();
    }
    catch{
        //422 -unprocesseble entity
        res.status(422).json({
            statusCode:422,
            status:false,
            message:'Please login first'
        })
    }

}

//for getting faculty details

app.post('/addFaculty',(req,res)=>{
    console.log('hello');
    dataservices.addFaculty(req.body.details,req.body.password).then(
        result=>res.status(result.statusCode).json(result)
    )
})

//API call to get all products

app.get('/getFaculty',(req,res)=>{
    dataservices.getFaculty().then(
        result=>{
            res.status(result.statuscode).json(result)
        }
    )
})

//updating faculty details

app.post('/updateFaculty',(req,res)=>{
    console.log('hello');
    dataservices.updateFaculty(req.body.user,req.body.designation,req.body.salary).then(
        result=>res.status(result.statusCode).json(result)
    )
})

//delete request

app.delete('/deleteFaculty/:faculty_number',(req,res)=>{
    console.log('hello');
    dataservices.deleteFaculty(req.params.faculty_number).then(
        result=>{res.status(result.statusCode).json(result) }
    )
})

//employee login

app.post('/userLogin',(req,res)=>{
    dataservices.userLogin(req.body.email,req.body.password).then(
        result=>res.status(result.statusCode).json(result)
    )//to check the values in request which is to dataservices
    
})

//updateImage
app.post('/updateImage',(req,res)=>{
    dataservices.updateImage(req.body.user,req.body.url).then(
        result=>res.status(result.statusCode).json(result)
    )
    
})

//API call to get all skills

app.get('/getskills',(req,res)=>{
    dataservices.getskills().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to save skills for user

app.post('/skillsUpdate',(req,res)=>{
    dataservices.skillsUpdate(req.body.user,req.body.data,req.body.level).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to get all skill of the user
app.post('/getuserSkills',(req,res)=>{
    dataservices.getuserSkills(req.body.user,req.body.data,req.body.level).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to change password
app.post('/changePassword',(req,res)=>{
    dataservices.changePassword(req.body.employee,req.body.oldpass,req.body.newpass).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to edit profile details
app.post('/editprofile',(req,res)=>{
    dataservices.editprofile(req.body.email,req.body.details).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})
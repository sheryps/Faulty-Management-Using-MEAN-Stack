//import mongoose

const mongoose = require('mongoose')

//define the connectionstring

mongoose.connect('mongodb://localhost:27017/FacultyManagementSystem',()=>{
    console.log('Connected to mongodb');
})

const Faculty = mongoose.model('faculties',{
    faculty_number:Number,
    faculty_name:String,
    joining_year:Number,
    birth_date:String,
    designation:String,
    mobile:Number,
    adharcard_number:Number,
    email:String,
    password:String,
    salary:Number,
    image:String
})

const Skill = mongoose.model('skills',{
    Name:String,
    image:String
})

const Userskill =mongoose.model('userskills',{
    User:String,
    Skill:String,
    Level:String,
    Image:String,
})
module.exports={
    Faculty,
    Skill,
    Userskill
}
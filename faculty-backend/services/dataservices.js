//import db
const mailsender =require('./send_email')
const db = require('./db')
const jwt = require('jsonwebtoken');


const addFaculty=(details,password)=>{
        this.faculty_number = Math.floor(1000 * Math.random()*10000);
        const user=details.faculty_name
        const email=details.email
        return db.Faculty.findOne({user,email}).then(//asynchronous call
          user=>{
            if(user){
              return{
                status:false,
                statusCode:400,
                message:'Employee already Exists'
              }
            }
            else{
              const newuser = new db.Faculty({
                faculty_number:this.faculty_number,
                faculty_name:details.faculty_name,
                joining_year:details.joining_year,
                birth_date:details.birth_date,
                designation:details.designation,
                mobile:details.mobile,
                adharcard_number:details.adharcard_number,
                email:details.email,
                password:password,
                salary:details.salary,
                image:'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1'
              })
              newuser.save()//to save new data to mongodb
              const mail =details.email
              const pass=password
              console.log(mail,pass);
              mailsender.mailer(mail,pass)
              return {
                status:true,
                statusCode:200,
                message:'register sucessfull'
              }
            }

      }) 
}
const getFaculty = ()=>{
  return db.Faculty.find().then(
      (result)=>{
          if(result){
              return{
                  status:true,
                  statuscode:200,
                  faculties:result
              }
          }else{
              return{
                  status:false,
                  statuscode:400,
                  message:'Product not found'
              }
          }
      }
  )
}
const updateFaculty =(user,designation,salary)=>{
  const faculty_number=user
    return db.Faculty.findOne({faculty_number}).then(//asynchronous call
          result=>{
          if(result){
            result.designation=designation
            result.salary=salary
            result.save()
          return {
            status:true,
            statusCode:200,
            message:'Updated Sucessfully'
          }
          }else{
            return {
              status:false,
              statusCode:400,
              message:'Updation Failed'
            }
          }  
      }) 
}
//delete faculty

const deleteFaculty=(faculty_number)=>{
    return db.Faculty.findOneAndDelete({faculty_number}).then(
        user=>{
            if(user){
              return {
                status:true,
                statusCode:200,
                message:'User Deleted'
            }
            }
            else{
              return {
                status:false,
                statusCode:400,
                message:'User not found'
            }
            }
          
        }
    )
  }
  
//employee login
const userLogin = (email,password)=>{

  return db.Faculty.findOne({email,password}).then(
    user=>{
      if(user){
        currentUser = email
        //token generate
        const token =jwt.sign({currentUser:email},'superkey2023')
        //superkey2023 like gsiens485ehyw53geu3353
        return {
          status:true, 
          currentUser:currentUser,
          statusCode:200,
          message:'login sucessfull',
          token:token,
          user:user,
          
        }
      }
      else{
        return {
          status:false,
          statusCode:400,
          message:'Invalid password'
        }
      }
    }
  )
} 

const updateImage =(user,url)=>{
  const email=user
  return db.Faculty.findOne({email}).then(//asynchronous call
        result=>{
        if(result){
          console.log(result);
          result.image=url
          result.save()
        return {
          status:true,
          statusCode:200,
          message:'Image Updated Sucessfully',
          image:result.image

        }
        }else{
          return {
            status:false,
            statusCode:400,
            message:'Updation Failed'
          }
        }  
    }) 
}

//get all skills from db

const getskills = ()=>{
  return db.Skill.find().then(
      (result)=>{
          if(result){
              return{
                  status:true,
                  statusCode:200,
                  skills:result
              }
          }else{
              return{
                  status:false,
                  statusCode:400,
                  message:'Product not found'
              }
          }
      }
  )
}

const skillsUpdate =(user,data,level)=>{
  const name=data.Name
  return db.Userskill.find().then(//asynchronous call
  result=>{
      const newskill = new db.Userskill({
        User:user,
        Skill:data.Name,
        Image:data.image,
        Level:level
      })
      newskill.save()//to save new data to mongodb
      return {
        status:true,
        statusCode:200,
        message:'skill added sucessfully'
      }
    }

  
) 
}
const getuserSkills=(user)=>{
  const User=user
  return db.Userskill.find({User}).then(//asynchronous call
        result=>{
        if(result){
        return {
          status:true,
          statusCode:200,
          userskills:result
        }
        }
    }) 
}
const changePassword=(employee,oldpass,newpass)=>{
  const email=employee
  const password=oldpass
  return db.Faculty.findOne({email,password}).then(
    result=>{
      result.password=newpass
      result.save()
      return{
        status:true,
        statusCode:200,
        message:'Password sucessfuly changed'
      }
    }
  )
}

const editprofile=(email,details)=>{
  return db.Faculty.findOne({email}).then(
    result=>{
      result.faculty_name=details.name
      result.email=details.email
      result.mobile=details.mobile
      result.birth_date=details.birth
      result.save()
      return{
        status:true,
        statusCode:200,
        message:'Details sucessfuly Updated',
        user:result
      }
    }
  )
}
module.exports={
    addFaculty,
    getFaculty,
    updateFaculty,
    deleteFaculty,
    userLogin,
    updateImage,
    getskills,
    skillsUpdate,
    getuserSkills,
    changePassword,
    editprofile
}
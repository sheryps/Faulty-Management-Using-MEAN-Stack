//import nodemailer
//hkeczrkfcbuuathu
const mailer=(mail,pass)=>{
const nodemailer = require('nodemailer')
console.log(mail,pass);

const msg = {
    from:'sherrygeorge48@gmail.com',
    to:mail,
    subject:'Sucessfull Competion on Registeration',
    text:'Congrats,You have been welcome to our company .For login purposes use username:'+mail+'and password:'+pass
};
nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sherrygeorge48@gmail.com',
        pass:'hkeczrkfcbuuathu',
    },
    port:465,
    host:'smtp.gmail.com'

})
.sendMail(msg , (err)=>{
    if(err){
        return console.log('error occurs',err);
    }
    else{
        return console.log('email sent');
    }
})

}

module.exports={
    mailer
}

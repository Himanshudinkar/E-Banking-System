const customerModel = require("../Models/customerModel");
const autoPassword = require("../Midllewere/autoPassword")
const acnumber = require("../Midllewere/accountNumber")
const nodemailer = require("nodemailer")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const registration = async(req,res) =>{
    const { fname,lname,address,city,mobile,email} = req.body;
    const photo = req.file.filename;
    const Mypass = autoPassword.autoPassword();
    const Acnumber = acnumber.accountNumber();
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(Mypass, salt);

    try {
    const Data =  await customerModel.create({
    fname:fname,
    lname:lname,
    address:address,
    city:city,
    mobile:mobile,
    email:email,
    photo:photo,
    password:hashPassword,
    acnumber:Acnumber
    })

     const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "himanshudinkar43@gmail.com",  
          pass: "kzut ydgq yphh ersm", 
        },
      });

      let maildetails = {
        from : "himanshudinkar43@gmail.com",
        to : email,
        subject : "E-Banking registration",
        text : `Dear ${fname} ${lname} Your account successfully created \n Your Password is ${Mypass}`
      }
      transporter.sendMail(maildetails )
      console.log("mail send successfully")
      console.log(Mypass)

    res.status(200).send("Succesfully Register")
    }


    catch (error) {
    res.status(400).send({msg:"Database not Connect"})
   }
}


const login = async(req,res) =>{
const { email,password} = req.body;
const User = await customerModel.findOne({email:email})

try {

     if (!User)
    {
       return res.send({msg:"Invalid Email!!!"});
    }
    const passwordMatch =  await bcrypt.compare(password, User.password);
   
    if (!passwordMatch)
    {
       return res.send({msg:"Invalid Password!"})
    }

    const token = await jwt.sign({id:User._id}, process.env.SECRETE_KEY, { expiresIn: '7 days' })
    console.log(token);   
    res.status(200).send({User:User,token:token,msg1:"Succesfully Login"});


    
} 

catch (error) {
    res.status(400).send({msg:"Database Not Respond"})
}



}




module.exports = {
    registration,
    login
}
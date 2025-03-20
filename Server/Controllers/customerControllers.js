const customerModel = require("../Models/customerModel");
const autoPassword = require("../Midllewere/autoPassword")
const nodemailer = require("nodemailer")
const bcrypt = require("bcryptjs")

const registration = async(req,res) =>{
    const { fname,lname,address,city,mobile,email} = req.body;
    const photo = req.file.filename;
    const Mypass = autoPassword.autoPassword();

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
    password:hashPassword
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
console.log(User)
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

    res.status(200).send("Succesfully Login")
    
} 

catch (error) {
    res.status(400).send({msg:"Database Not Respond"})
}

}



module.exports = {
    registration,
    login
}
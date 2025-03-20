import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import BASE_URL from "../Config";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () =>{
  
    let [input,setInput] = useState({});
  
    const handleinput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setInput((values) => ({...values,[name]:value}))
        console.log(input)
    }
   

  
    const handlesubmit = async (e) =>{
      e.preventDefault();
  
      let api = `${BASE_URL}/customer/login`;
  
      try {
  
        let response = await axios.post(api,input);
        console.log(response.data);
        toast.success(response.data)
        toast.warning(response.data.msg)
        
      } catch (error) {
        console.log(error.response.data.msg)
      }
    }
  

    return(
        <>
        <div className="login">
          <h1 style={{color:"white",fontSize:"55px",marginTop:"40px",marginLeft:"50px"}}>Login</h1>
        </div>

        <div className="registerform">

           <Form className="formedit">
      

       

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control style={{backgroundColor:"#F5F5F5",borderRadius:"0px"}} type="email" name="email" onChange={handleinput} />
      </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control style={{backgroundColor:"#F5F5F5",borderRadius:"0px"}} type="password" name="password" onChange={handleinput} />
      </Form.Group>
       

      
      <Button style={{backgroundColor:"#800000"}} type="submit" onClick={handlesubmit}>
        Submit
      </Button>
    </Form>

        </div>

         <ToastContainer /> 
        
        
        </>
    )
}

export default Login
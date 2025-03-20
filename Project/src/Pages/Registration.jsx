import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import BASE_URL from "../Config";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Registration = () =>{

  let [input,setInput] = useState({});
  let [photo,setPhoto] = useState("");

  const handleinput = (e) =>{
      let name = e.target.name;
      let value = e.target.value;
      setInput((values) => ({...values,[name]:value}))
      console.log(input)
  }
 
  const handlefile = (e) =>{
    let photo = e.target.files[0];
    setPhoto(photo);
    console.log(photo);
  }

  const handlesubmit = async (e) =>{
    e.preventDefault();

    let formdata = new FormData()

    formdata.append("fname",input.fname);
    formdata.append("lname",input.lname);
    formdata.append("address",input.address);
    formdata.append("city",input.city);
    formdata.append("mobile",input.mobile);
    formdata.append("email",input.email);
    formdata.append("photo",photo);

    let api = `${BASE_URL}/customer/registration`;

    try {

      let response = await axios.post(api,formdata);
      console.log(response.data);
        toast.success(response.data)
      
    } catch (error) {
      console.log(error.response.data.msg)
    }
  }



    return(
        <>

        <div className="openaccount">
          <h1 style={{color:"white",textAlign:"center",fontSize:"45px",marginTop:"40px"}}>Register Yourself</h1>
        </div>

        <div className="registerform">

           <Form className="formedit">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter First Name</Form.Label>
        <Form.Control  style={{backgroundColor:"#F5F5F5",borderRadius:"0px"}} type="text" name="fname" onChange={handleinput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Last Name</Form.Label>
        <Form.Control style={{backgroundColor:"#F5F5F5",borderRadius:"0px"}} type="text" name="lname" onChange={handleinput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control style={{backgroundColor:"#F5F5F5",borderRadius:"0px"}} type="text" name="address" onChange={handleinput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control style={{backgroundColor:"#F5F5F5",borderRadius:"0px"}} type="text" name="city" onChange={handleinput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile Number</Form.Label>
        <Form.Control style={{backgroundColor:"#F5F5F5",borderRadius:"0px"}} type="text" name="mobile" onChange={handleinput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control style={{backgroundColor:"#F5F5F5",borderRadius:"0px"}} type="email" name="email" onChange={handleinput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Choose Image</Form.Label>
        <Form.Control style={{backgroundColor:"#F5F5F5",borderRadius:"0px"}} type="file" name="photo" onChange={handlefile} />
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

export default Registration
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";
import logo from "../assets/logo.png"

const Footer = () =>{
    return(
        <>
        
        <div className="footer">

             <Card style={{ width: '24rem',border:"none"}}>
      
      <Card.Body style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
        <Card.Title style={{color:"gray",fontWeight:"400"}}>Follow Us On</Card.Title>
        <Card.Text style={{display:"flex",justifyContent:":center",alignItems:"center",gap:"10px"}}>
            <div style={{fontSize:"20px",backgroundColor:"rgb(232, 229, 229)",padding:"5px 10px 5px 10px"}}><SlSocialFacebook  /></div>
            <div style={{fontSize:"20px",backgroundColor:"rgb(232, 229, 229)",padding:"5px 10px 5px 10px"}}> <FaInstagram /> </div>
            <div style={{fontSize:"20px",backgroundColor:"rgb(232, 229, 229)",padding:"5px 10px 5px 10px"}}> <FaXTwitter /> </div>
            <div style={{fontSize:"20px",backgroundColor:"rgb(232, 229, 229)",padding:"5px 10px 5px 10px"}}> <PiYoutubeLogo /> </div>
        </Card.Text>
    
      </Card.Body>
    </Card>

     <Card style={{ width: '28rem',border:"none",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
      <Card.Img variant="top" src={logo} style={{width:"200px"}} />
      <Card.Body>
        <Card.Title style={{fontSize:"16px",color:"gray"}}>copyrights <span style={{color:"red"}}> © 2025 Flexibank.</span> All Rights Reserved.</Card.Title>
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem',border:"none" }}>
    <Card.Title style={{color:"gray",fontWeight:"400"}}>Terms & Conditions Disclaimer.</Card.Title>
    </Card>
        </div>
        </>
    )
}

export default Footer
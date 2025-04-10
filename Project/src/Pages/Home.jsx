import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import icone1 from "../assets/icon-21-1.png"
import icone2 from "../assets/icon-15-1.png"
import icone4 from "../assets/icon-2.png"
import icone3 from "../assets/icon-14-1.png"
import card from "../assets/card-1-2.png"
import arrow from "../assets/icon-4.png"
import { useNavigate } from 'react-router-dom';
const Home = () =>{

    const [clicked, setClicked] = useState(false);
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);

    const nav = useNavigate();

    const navigate = () =>{
      nav("/registar")
    }
    return(
        <>
   <div className="home">
    <div className="homecontent">
        <h1>Enjoy zero free</h1>
        <h1>banking on your </h1>
        <h1>sb account.</h1>
        <Button variant="danger" onClick={navigate}>Register</Button>
    </div>
   </div>


   <section className='main'>

      <div className="content2">
        <h5>...CUSTOM BANKING...</h5>
        <h1>Banking For Your Needs</h1>
      </div>

     <div className="maincard">

        <Card style={{ width: '16rem',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"30px",   boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"0px",border:"none"}}>
     <div
        className={`circle ${clicked ? "animate" : ""}`}
        onClick={() => setClicked(!clicked)}
        style={{marginTop:"30px"}}
      >
       <div style={{backgroundColor:"white",padding:"14px",borderRadius:"50%"}}> <img src={icone1} style={{height:"27px",widhth:"27px"}} alt="" /></div>
      </div>
      <Card.Body style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Card.Title>Fixed Deposite</Card.Title>
         <Card.Title style={{fontSize:"16px",fontWeight:"500",color:"gray"}}>Higher Return & Security</Card.Title>
      </Card.Body>
    </Card>

     <Card style={{ width: '16rem',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"0px",border:"none"}}>
     <div
        className={`circle ${clicked1 ? "animate" : ""}`}
        onClick={() => setClicked1(!clicked1)}
        style={{marginTop:"30px"}}
      >
       <div style={{backgroundColor:"white",padding:"14px",borderRadius:"50%"}}> <img src={icone2} style={{height:"27px",widhth:"27px"}} alt="" /></div>
      </div>
      <Card.Body style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Card.Title>Family 360o</Card.Title>
         <Card.Title style={{fontSize:"16px",fontWeight:"500",color:"gray"}}>Complate Banking Solution</Card.Title>
      </Card.Body>
    </Card>


    <Card style={{ width: '16rem',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"0px",border:"none"}}>
     <div
        className={`circle ${clicked2 ? "animate" : ""}`}
        onClick={() => setClicked2(!clicked2)}
        style={{marginTop:"30px"}}
      >
       <div style={{backgroundColor:"white",padding:"14px",borderRadius:"50%"}}> <img src={icone3} style={{height:"27px",widhth:"27px"}} alt="" /></div>
      </div>
      <Card.Body style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Card.Title>Investments</Card.Title>
         <Card.Title style={{fontSize:"16px",fontWeight:"500",color:"gray"}}>Secure You & Your Family</Card.Title>
      </Card.Body>
    </Card>

   <Card style={{ width: '16rem',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"0px",border:"none"}}>
     <div
        className={`circle ${clicked3 ? "animate" : ""}`}
        onClick={() => setClicked3(!clicked3)}
        style={{marginTop:"30px"}}
      >
       <div style={{backgroundColor:"white",padding:"14px",borderRadius:"50%"}}> <img src={icone4} style={{height:"27px",widhth:"27px"}} alt="" /></div>
      </div>
      <Card.Body style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Card.Title>Accounts</Card.Title>
         <Card.Title style={{fontSize:"16px",fontWeight:"500",color:"gray"}}>Duty The Obligations Business</Card.Title>
      </Card.Body>
    </Card>

     </div>
      
   </section>


   <section className='atmcard'>

    <div className="atm">

      <div className="atmdesign">
       <Card style={{ width: '24rem',marginTop:"80px",backgroundColor:"red" }}>
      <Card.Img variant="top" src={card} style={{height:"15rem"}} />
      
    </Card>


     <Card style={{ width: '28rem',marginTop:"30px",backgroundColor:"rgba(255, 255, 255, 0)",border:"1px solid rgba(255, 255, 255, 0)" }}>
      <Card.Body style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",gap:"10px"}}>
        <Card.Title style={{color:"white",fontSize:"25px"}}>...CREDIT CARD</Card.Title>
        <Card.Title style={{color:"white",fontSize:"45px",fontWeight:"600"}}>Discover Our Range of Credit Cards</Card.Title>
        <Card.Title style={{color:"white",fontSize:"18px"}}> <img src={arrow} alt="" /> Explore Cards</Card.Title>
        <Card.Text style={{color:"rgb(209, 209, 209)",fontFamily:""}}>
          Business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters
        </Card.Text>
        <Card.Title style={{color:"white",fontSize:"20px"}}>Get Your Perfect Card Now!...</Card.Title>
        <Button style={{backgroundColor:"red",border:"red",fontSize:"20px"}}>Rewards Cards</Button>
        
      </Card.Body>
    </Card>

    </div>
    </div>

   </section>
        </>
    )
}

export default Home
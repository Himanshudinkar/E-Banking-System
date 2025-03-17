import { useState } from "react";

const Registration = () =>{

      const [clicked, setClicked] = useState(false);


    return(
        <>
  <div className="container">
      <div
        className={`circle ${clicked ? "animate" : ""}`}
        onClick={() => setClicked(!clicked)}
      >
        <img src="https://azim.hostlin.com/Flexibank/assets/images/resource/banking-1.jpg" style={{height:"25px",widhth:"25px"}} alt="" />
      </div>
    </div>
        </>
    )
}

export default Registration
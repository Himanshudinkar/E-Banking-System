import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Table } from "react-bootstrap";

const YourProfile = () =>{
     const fname = localStorage.getItem("fname");
     const lname = localStorage.getItem("lname");
     const acnumber = localStorage.getItem("acnumber");
     const address = localStorage.getItem("address");
     const city = localStorage.getItem("city");
     const mobile = localStorage.getItem("mobile");
     const email = localStorage.getItem("email");


     const accountInfo = {
    "Account Number": acnumber,
    Name: `${fname}  ${lname}`,
    Address: address,
    City: city,
    "Mobile Number": mobile,
    "Email Id": email,
  };


    return(
        <>
        
        <div className="openaccount">
          <h1 style={{color:"white",textAlign:"center",fontSize:"45px",marginTop:"40px"}}>Welcome To FlexiBank</h1>
         
        </div>

<Container className="d-flex justify-content-center align-items-center vh-100" >
      <Card className="shadow-lg border-0" style={{ width: "500px", borderRadius: "12px", fontFamily: "Roboto, sans-serif" }}>
        
        {/* 🔷 Header Section */}
        <Card.Header className="bg-primary text-white text-center py-3 rounded-top">
          <h4 className="mb-0" style={{ fontWeight: "600", letterSpacing: "1px" }}>Account Details</h4>
        </Card.Header>

        {/* 📋 Table Section */}
        <Table responsive className="m-0">
          <tbody>
            {Object.entries(accountInfo).map(([key, value]) => (
              <tr key={key} style={{ fontSize: "16px", fontWeight: "500" }}>
                <td className="fw-bold text-secondary px-3 py-2" style={{ width: "40%", backgroundColor: "#f9fafb" }}>{key}:</td>
                <td className="px-3 py-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* 📌 Footer Section */}
        <Card.Footer className="bg-light text-center py-3">
          <p className="text-muted mb-1" style={{ fontSize: "14px" }}>
            <strong>Note:</strong> Please ensure your details are up-to-date for security.
          </p>
          <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
            For assistance, contact <strong>1800-123-4567</strong> (24x7 Support).
          </p>
        </Card.Footer>

      </Card>
    </Container>

    (
    <Container fluid className="py-4">
      
    
      <Card className="shadow-sm border-0 mb-3">
        <Card.Body>
          <h5 className="text-primary">🔐 Security Guidelines</h5>
          <ul className="text-muted" style={{ fontSize: "14px" }}>
            <li>Never share your account details with anyone.</li>
            <li>Use a strong password and change it regularly.</li>
            <li>Enable two-factor authentication (2FA) for extra security.</li>
            <li>Check your account statements regularly for unauthorized transactions.</li>
          </ul>
        </Card.Body>
      </Card>

     
      <Card className="shadow-sm border-0 mb-3">
        <Card.Body>
          <h5 className="text-primary">🏦 Bank Policies</h5>
          <ul className="text-muted" style={{ fontSize: "14px" }}>
            <li>Minimum balance requirement: ₹5,000</li>
            <li>Free ATM withdrawals up to 5 times per month.</li>
            <li>Late fee charges apply after the due date.</li>
            <li>Loan interest rates vary based on credit score.</li>
          </ul>
        </Card.Body>
      </Card>

     
      <Card className="shadow-sm border-0 mb-3">
        <Card.Body>
          <h5 className="text-primary">📞 Customer Support</h5>
          <ul className="text-muted" style={{ fontSize: "14px" }}>
            <li>For account-related queries, call: <strong>1800-123-4567</strong></li>
            <li>Email support available at: <strong>support@bank.com</strong></li>
            <li>Live chat support available 24x7 on our website.</li>
            <li>Visit our nearest branch for in-person assistance.</li>
          </ul>
        </Card.Body>
      </Card>

     
      <Card className="shadow-sm border-0">
        <Card.Body>
          <h5 className="text-danger">📢 Important Announcements</h5>
          <ul className="text-muted" style={{ fontSize: "14px" }}>
            <li>Banking services will be unavailable from <strong>2 AM - 4 AM</strong> due to maintenance.</li>
            <li>New security updates have been implemented for online transactions.</li>
            <li>New credit card offers available for premium customers.</li>
            <li>Beware of phishing scams, always verify official bank emails.</li>
          </ul>
        </Card.Body>
      </Card>

    </Container>
        
        </>
    )
}

export default YourProfile
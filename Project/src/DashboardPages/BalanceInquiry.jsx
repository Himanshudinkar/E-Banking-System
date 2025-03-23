import { useEffect, useState } from "react";
import BASE_URL from "../Config";
import axios from "axios";
import { Container, Card, Spinner } from "react-bootstrap";

const BalanceInquiry = () => {
  const [balance, setBalance] = useState([]);
  const [loading, setLoading] = useState(true);

  let netBalance = 0;

  const loadData = async () => {
    const api = `${BASE_URL}/customer/balanceinqury/?custid=${localStorage.getItem("custId")}`;

    try {
      const response = await axios.get(api);
      setBalance(response.data.data1);
    } catch (error) {
      console.log(error.response?.data?.msg || "Error fetching balance");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  balance.forEach((e) => {
    if (e.status === "credited") {
      netBalance += e.account;
    }
    if (e.status === "debited") {
      netBalance -= e.account;
    }
  });

  return (
    <Container className="balance-container">
      
   
      <header className="balance-header">
        <h2>🏦 FlexiBank</h2>
        <p>Your Trusted Financial Partner</p>
      </header>

    
      <Card className="balance-card">
        <h2 className="balance-title">💰 Account Balance</h2>
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <h1 className="balance-amount">₹{netBalance.toLocaleString()}</h1>
        )}
      </Card>

    <footer className="balance-footer">
  <div className="footer-top">
    <h3>💙 Thank You for Banking with FlexiBank</h3>
    <p>Secure | Reliable | Fast</p>
  </div>
  
  <div className="footer-bottom">
    <p>🔒 Your security is our top priority.</p>
    <p>💼 Invest smartly, save wisely!</p>
  </div>
</footer>

    </Container>
  );
};

export default BalanceInquiry;

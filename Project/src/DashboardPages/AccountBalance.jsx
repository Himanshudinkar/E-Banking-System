import { useEffect, useState } from "react";
import BASE_URL from "../Config";
import axios from "axios";


const AccountStatement = () => {
  const [balance, setBalance] = useState([]);

  let creditAmount = 0;
  let debitAmount = 0;
  let netBalance = 0;

  const loadData = async () => {
    const api = `${BASE_URL}/customer/balanceinqury/?custid=${localStorage.getItem("custId")}`;

    try {
      const response = await axios.get(api);
      setBalance(response.data.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  balance.forEach((e) => {
    if (e.status === "credited") {
      creditAmount += e.account;
    }
    if (e.status === "debited") {
      debitAmount += e.account;
    }
  });

  netBalance = creditAmount - debitAmount;

  return (
    <div className="account-statement-container">
  
      <div className="account-statement-header">📄 Account Statement</div>

   
      <div className="account-balance">💰 Net Ledger Balance: ₹{netBalance}</div>

      
      <table className="statement-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Credited (₹)</th>
            <th>Debited (₹)</th>
          </tr>
        </thead>
      <tbody>
  {balance.length > 0 ? (
    balance.map((e, index) => (
      <tr key={index}>
        <td>{e.date.split("T")[0]}</td> 
        <td>{e.status === "credited" ? e.account : "-"}</td>
        <td>{e.status === "debited" ? e.account : "-"}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="3">No transactions found</td>
    </tr>
  )}
</tbody>
      </table>

    
      <div className="account-statement-footer">
        🏦 Thank you for banking with us. Stay secure and safe!
      </div>
    </div>
  );
};

export default AccountStatement;

import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {firstname:"Ammar Sihombing"}
  const acount = [
    {
      name: "Bank A", currentBalance: 500.00,
      id: "12345",
      availableBalance: 450.00,
      officialName: "Bank Alpha",
      mask: "1234",
      institutionId: "inst_001",
      type: "checking",
      subtype: "personal",
      appwriteItemId: "item_001",
      shareableId: "share_001"
    },
    {
      name: "Bank B", currentBalance: 750.35,
      id: "67890",
      availableBalance: 700.00,
      officialName: "Bank Beta",
      mask: "5678",
      institutionId: "inst_002",
      type: "savings",
      subtype: "business",
      appwriteItemId: "item_002",
      shareableId: "share_002"
    }
  ]
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
         <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstname || "Guest"}
            subtext="Access and manage your account and transactions efficiently."

         />
         <TotalBalanceBox
            accounts={acount}
            totalBanks={1}
            totalCurrentBalance={1250.35}
         />
        </header>
      </div>
    </section>
  );
};

export default Home;

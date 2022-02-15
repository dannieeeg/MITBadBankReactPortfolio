function Home(){
const ctx = React.useContext(UserContext);  
const balanceValue = React.useContext(BalanceContext);  
  return (
    <Card
      bgcolor="secondary"
      txtcolor="white"
      header="BadBank"
      title="Welcome to the bank"
      text=""
      body={(
          <div>
          <img src="bank-law.jpg" className="img-fluid" alt="Responsive image"/>
          <h1>Available Balance: ${balanceValue.balance}</h1>
          </div>
          )}      
    />    
  );  
}

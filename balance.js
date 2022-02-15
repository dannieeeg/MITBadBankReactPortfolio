function Balance(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const ctx = React.useContext(UserContext);  
  const balanceValue = React.useContext(BalanceContext); 

  return (
    <Card
      bgcolor="success"
      header="AVAILABLE BALANCE"
      status={status}
      body={show ? (  
              <>
              <h1 className="" id="balance" placeholder="">${JSON.stringify(balanceValue.balance)}</h1><br/>
              </>
            ):(
              <>
              </>
            )}
    />
  )
}
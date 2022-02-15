function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdrawAmount, setWithdrawAmount]  = React.useState('');
  const ctx = React.useContext(UserContext);  
  const balanceValue = React.useContext(BalanceContext);  
  const [balance, updateBalance]   = React.useState(balanceValue.balance);
  
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label + ' value not provided');
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if (field <= 0 ) {
        setStatus('Error: Withdraw amount must be great than zero');
        clearForm();
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if (isNaN(field)==true){
        setStatus('Error: Value must be numerical');
        clearForm();
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function withdraw(){
    console.log(balance,withdrawAmount);
    if (!validate(balance,     'balance'))     return;
    if (!validate(withdrawAmount,    'withdrawAmount'))    return;
    let int = parseInt(withdrawAmount);
    if (withdrawAmount > balanceValue.balance) {
        let newBalance = balance - int;
        updateBalance(newBalance)
        balanceValue.balance = newBalance;
        ctx.users.push({withdrawTaken: withdrawAmount, overDraft: true});
        setTimeout(() => clearForm(),3000);
        setTimeout(() => setStatus(''),3000);
        return setStatus('WARNING - OVERDRAFT: Withdraw amount exceeds current balance - Account is overdrafted!')
    } else {
      let newBalance = balance - int;
      updateBalance(newBalance)
      balanceValue.balance = newBalance;
      ctx.users.push({withdrawTaken: withdrawAmount});
    }

    setShow(false);
  }    

  function clearForm(){
    setWithdrawAmount('');
    setShow(true);
  } 

  return (
    <Card
      bgcolor="success"
      header="You Selected to make a Withdrawal!"
      status={status}
      body={show ? (  
              <>
              Balance<br/>
              <h3 className="" id="balance" placeholder="">${balance}</h3><br/>
              Withdraw Amount <br/>
              <input type="input" className="form-control" id="withdrawAmount" placeholder="Enter amount" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={withdraw} disabled={!withdrawAmount}>Withdraw</button>
              </>
            ):(
              <>
              <h4>Successfully Withdrew ${withdrawAmount}</h4>
              <h3 className="" id="balance" placeholder="">New Balance: ${balance}</h3><br/>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Withdrawal!</button><br/>
              </>
            )}
    />
  )
}
function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label + ' cannot be empty');
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if (!email) {
        setStatus('Error: Email cannot be empty');
        setPassword('');
        setTimeout(() => setStatus(''),3000);
        return false;
      }else if (!password) {
        setStatus('Error: Password cannot be empty');
        setPassword('');
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if (password.length < 5) {
        setStatus('Error: Password must be at least five(5) characters');
        setPassword('');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Create Account"
      status={status}
      body={show ? (  
              <div className="ui container" style={{marginTop: '15px'}}>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!name || !email || !password}>Create Account</button>
              </div>
            ):(
              <>
              <h5>Success! <br/>Account for {name} Created</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm} >Would You Like to Add Another Account?</button>
              </>
            )}
    />
  )
}
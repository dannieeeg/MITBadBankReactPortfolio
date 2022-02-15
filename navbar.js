function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" >
        <ul className="navbar-nav">
          <li title="Click here to create an account" className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li title="Click here to make a deposit" className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          {/* <li title="Click here to make a deposit" className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li> */}
          <li title="Click here to make a withdrawal" className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          {/* <li title="Click here to check your balance" className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li> */}
          <li title="Click here to view all accounts" className="nav-item">
            <a className="nav-link" href="#/alldata/">All Data</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}


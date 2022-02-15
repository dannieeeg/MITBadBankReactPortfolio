function AllData(){
  const ctx = React.useContext(UserContext);
  const userAccounts = ctx.users;
  const balanceValue = React.useContext(BalanceContext); 
  const amounts = balanceValue;

    return (
          <div>
            <table className="ui celled table">
              <thead bgcolor="secondary">
                <tr>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Password</th>
                </tr>
              </thead>
          {userAccounts.map(function(user, i){
            return (
              <tbody>
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
              </tbody> )
          })}
           </table>
          </div>
    );
};



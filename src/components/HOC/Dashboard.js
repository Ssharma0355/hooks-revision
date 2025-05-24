import React from 'react'
import withAuth from './utils/WithAUth'
import withDark from './utils/WithDark';

function Dashboard() {
  return (
    <div>
      this is Dashboard
    </div>
  )
}
const AuthDasboard = withAuth(Dashboard);

export default AuthDasboard;

import React from 'react'
import Sidebar from './Sidebar'
import KnownObjects from './KnownObjects'

const Dashboard = () => {
  return (
    <div className="Container">
        <div><h1>Dashboard</h1></div>
      <br />
      <div><Sidebar /></div>
      <KnownObjects />
    </div>
  )
}

export default Dashboard
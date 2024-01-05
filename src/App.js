import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Home from './Home/Home'
import Pick from './section3/Pick'
import SelectPlan from './section2/SelectPlan'
import Finish from './Section4/Finish'
import Error from './Error'
import Summary from './Section4/Summary'
import Sidebar from './Aside/Sidebar'

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    planPrice: '',
    duration: '',
    plan: '',
    pick: [],
  })

  const handleChange = (e) => {
    const updatedUsers = { ...user, [e.target.name]: e.target.value }
    setUser(updatedUsers)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('You clicked')
    console.log(user)
  }
  return (
    <main>
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/plan"
          element={<SelectPlan user={user} setUser={setUser} />}
        />
        <Route path="/pick" element={<Pick user={user} setUser={setUser} />} />
        <Route path="/summary" element={<Summary user={user} />} />
        <Route path="/finish" element={<Finish />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Pages/Home/Index'
import Pick from './Pages/PickPage/Index'
import Plan from './Pages/PlanPage/Index'
import Finish from './Pages/Summary/Finish'
import Summary from './Pages/Summary/Summary'
import Error from './components/Error'
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
  }
  return (
    <main>
      <Sidebar />
      <div className="wrapper">
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
            element={<Plan user={user} setUser={setUser} />}
          />
          <Route
            path="/pick"
            element={<Pick user={user} setUser={setUser} />}
          />
          <Route path="/summary" element={<Summary user={user} />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </main>
  )
}

export default App

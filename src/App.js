import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Pick from './section3/Pick'
import SelectPlan from './section2/SelectPlan'
import Finish from './Components/Finish'
import Error from './Components/Error'
import Summary from './Section4/Summary'
import { useState } from 'react'
import Sidebar from './Aside/Sidebar'

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
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
          path="/select"
          element={<SelectPlan user={user} setUser={setUser} />}
        />
        <Route path="/pick" element={<Pick user={user} setUser={setUser} />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/finish" element={<Finish />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  )
}

export default App

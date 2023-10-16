import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Main from './Aside/Main'
import Pick from './Components/Pick'
import SelectPlan from './Components/SelectPlan'
import Finish from './Components/Finish'
import Error from './Components/Error'
import Yearly from './Components/Yearly'
import Monthly from './Components/Monthly'
import Summary from './Components/Summary'

function App() {
  return (
    <main>
      <Main />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<SelectPlan />}>
          <Route index element={<Monthly />} />
          <Route path="monthly" element={<Monthly />} />
          <Route path="yearly" element={<Yearly />} />
        </Route>
        <Route path="/pick" element={<Pick />} />
        <Route path="/pick/summary" element={<Summary />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/finish" element={<Finish />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  )
}

export default App

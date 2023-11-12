import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Main from './Aside/Main'
import Pick from './Components/Pick'
import SelectPlan from './section2/SelectPlan'
import Finish from './Components/Finish'
import Error from './Components/Error'
import Summary from './Components/Summary'

function App() {
  return (
    <main>
      <Main />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<SelectPlan />} />
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

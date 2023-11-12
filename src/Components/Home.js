import { NavLink } from 'react-router-dom'
import Input from './Input'
import { inputs } from '../Data'
const Home = () => {
  return (
    <div className="wrapper">
      <div className="head">
        <h2>Personal Information</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form>
        {inputs.map((input) => {
          return (
            <div className="input">
              <Input key={input.id} input={input} />
            </div>
          )
        })}
        <NavLink to="/select">
          <div className="btn">
            <button type="button" className="button">
              Next Step
            </button>
          </div>
        </NavLink>
      </form>
    </div>
  )
}
export default Home

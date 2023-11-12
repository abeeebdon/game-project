import { NavLink } from 'react-router-dom'
import { inputs } from '../Data'
import Input from './Input'
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
        <div className="btn">
          <NavLink to="/select">
            <button type="button" className="button">
              Next Step
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  )
}
export default Home

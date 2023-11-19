import { NavLink } from 'react-router-dom'
import { inputs } from '../Data'
import Input from './Input'
import Head from '../Components/Head'
const Home = () => {
  return (
    <div className="wrapper">
      <Head
        head="Personal Information"
        paragraph="Please provide your name, email address, and phone number"
      />

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

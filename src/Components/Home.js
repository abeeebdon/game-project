import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="wrapper">
      <div className="head">
        <h2>Personal Information</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form>
        <div className="input">
          <label>Name</label>
          <input
            type="text"
            id="name "
            placeholder="e.g. Stephen King
"
            required
          />
        </div>
        <div className="input">
          <label>Email Address</label>
          <input
            type="email"
            id="e-mail"
            placeholder="  e.g. stephenking@lorem.com
"
            required
          />
        </div>
        <div className="input">
          <label> Phone Number</label>
          <input
            type="text"
            id="number"
            placeholder="e.g. +1 234 567 890 "
            required
          />
        </div>
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

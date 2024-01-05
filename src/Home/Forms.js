import { useNavigate } from 'react-router-dom'
const Forms = ({ handleSubmit, user, setUser, handleChange }) => {
  const navigate = useNavigate()

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="input"
          placeholder="e.g. Stephen King"
          value={user.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email Address</label>

        <input
          type="email"
          name="email"
          id="email"
          className="input"
          placeholder="e.g. king@gmail.com"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="phoneNumber">Phone Number</label>

        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          className="input"
          placeholder="e.g. +1 234 567 890"
          value={user.phoneNumber}
          required
          onChange={handleChange}
        />
      </div>
    </form>
  )
}
export default Forms

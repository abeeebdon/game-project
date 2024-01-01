import Head from '../Head'
import Forms from './Forms'
const Home = ({ handleSubmit, handleChange, user, setUser }) => {
  return (
    <div className="wrapper">
      <Head
        head="Personal Information"
        paragraph="Please provide your name, email address, and phone number"
      />

      <Forms
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        user={user}
        setUser={setUser}
      />
    </div>
  )
}
export default Home

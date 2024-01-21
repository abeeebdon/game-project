import Button from '../../components/Button'
import Head from '../../components/Head'
import Forms from './Forms'
const Index = ({ handleSubmit, handleChange, user, setUser }) => {
  return (
    <>
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
      {!(user.name && user.email && user.phoneNumber) ? (
        <p style={{ color: 'red' }}>Please fill in all fields</p>
      ) : (
        <div className="btn-container">
          <Button btn="Next" position="right" target="plan" />
        </div>
      )}
    </>
  )
}
export default Index

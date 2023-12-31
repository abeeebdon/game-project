import Head from '../Head'
import { picks } from '../Data'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
import Button from '../Button'

const Pick = ({ user, setUser }) => {
  const navigate = useNavigate()

  return (
    <div className="wrapper">
      {user.duration ? (
        <>
          <Head
            head="Pick add-ons"
            paragraph="Add ons help enhance your gaming experience."
          />

          <div className="add-ons">
            {picks.map((pick) => {
              return (
                <Card
                  pick={pick}
                  key={pick.id}
                  picks={picks}
                  user={user}
                  setUser={setUser}
                />
              )
            })}
          </div>
          <div className="btn-container">
            <Button btn="Go Back" position="left" target="plan" />
            <Button btn="Next" position="right" target="summary" />
          </div>
        </>
      ) : (
        <div>
          <p>
            There is an error, Please go back and enter your details{' '}
            <button onClick={() => navigate('../select')} className="button">
              Go Back
            </button>
          </p>
        </div>
      )}
    </div>
  )
}
export default Pick

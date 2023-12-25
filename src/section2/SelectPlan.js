import { useEffect, useState } from 'react'
import { monthPlan } from '../Data'
import Plans from './Plans'
import Select from './Select'
import Head from '../Components/Head'
import { useNavigate } from 'react-router-dom'
const SelectPlan = ({ user, setUser }) => {
  const [plans, setPlans] = useState([])
  useEffect(() => {
    setPlans(monthPlan)
  }, [])
  const navigate = useNavigate()
  return (
    <div className="wrapper">
      {user.name ? (
        <>
          <Head
            head="Select your plan"
            paragraph="You have the option of monthly or yearly billing"
          />
          <div className="plan">
            {plans.map((card) => {
              return (
                <Plans
                  key={card.id}
                  card={card}
                  plans={plans}
                  className="card"
                  user={user}
                  setUser={setUser}
                />
              )
            })}
          </div>
          <Select plans={plans} setPlans={setPlans} />
          <div className="btn">
            <button id="go" onClick={() => navigate('/select')}>
              Go Back
            </button>
            <button onClick={() => navigate('/pick')}>Next Step</button>
          </div>
        </>
      ) : (
        <div>
          <p>
            There is an error, Please go back and enter your details{' '}
            <button onClick={() => navigate('/')}>Go Back</button>
          </p>
        </div>
      )}
    </div>
  )
}
export default SelectPlan

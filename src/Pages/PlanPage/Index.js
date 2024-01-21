import { useEffect, useState } from 'react'
import { monthPlan } from '../../Data'
import Plans from './Plans'
import Select from './Select'
import Head from '../../components/Head'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
const Index = ({ user, setUser }) => {
  const [plans, setPlans] = useState([])
  useEffect(() => {
    setPlans(monthPlan)
  }, [])
  const navigate = useNavigate()
  return (
    <>
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
          <div className="btn-container">
            <Button btn="Go Back" position="left" />
            <Button btn="Next" position="right" target="pick" />
          </div>
        </>
      ) : (
        <div className="error">
          <p>
            There is an error, Please go back and enter your details{' '}
            <button onClick={() => navigate('/')}>Go Back</button>
          </p>
        </div>
      )}
    </>
  )
}
export default Index

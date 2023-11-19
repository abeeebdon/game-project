import { useEffect, useState } from 'react'
import { monthPlan } from '../Data'
import Plans from './Plans'
import Select from './Select'
import Head from '../Components/Head'
const SelectPlan = () => {
  const [plans, setPlans] = useState([])
  useEffect(() => {
    setPlans(monthPlan)
  }, [])
  return (
    <div className="wrapper">
      <Head
        head="Select your plan"
        paragraph="You have the option of monthly or yearly billing"
      />
      <div className="plan">
        {plans.map((card) => {
          return (
            <Plans key={card.id} card={card} plans={plans} className="card" />
          )
        })}
      </div>
      <Select plans={plans} setPlans={setPlans} />
      <div className="btn">
        <button id="go">Go Back</button>
        <button>Next Step</button>
      </div>
    </div>
  )
}
export default SelectPlan

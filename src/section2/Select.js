import { monthPlan, yearplan } from '../Data'
const Select = ({ plans, setPlans }) => {
  const handleYearly = () => {
    setPlans(yearplan)
  }
  const handleMonthly = () => {
    const change = monthPlan
    if (plans === change) {
      return
    } else {
      setPlans(change)
    }
  }
  return (
    <div className="select-plan">
      <button onClick={() => handleMonthly()}>Monthly</button>
      <div className="indicator">
        <span
          className={plans === yearplan ? 'position-right' : 'position-left'}
        >
          0
        </span>
      </div>
      <button onClick={() => handleYearly()}>Yearly</button>
    </div>
  )
}
export default Select

import { monthPlan, yearplan } from '../Data'
const Select = ({ plans, setPlans }) => {
  const handleClick = () => {
    const change = yearplan
    setPlans(change)
  }
  const handleClick1 = () => {
    const change = monthPlan
    if (plans === change) {
      return
    } else {
      setPlans(change)
    }
  }
  return (
    <div className="select-plan">
      <button onClick={() => handleClick1()}>Monthly</button>
      <div className="click-btn">
        <span>0</span>
      </div>
      <button onClick={() => handleClick()}>Yearly</button>
    </div>
  )
}
export default Select

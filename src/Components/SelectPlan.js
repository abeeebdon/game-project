import { Link, Outlet } from 'react-router-dom'
const SelectPlan = () => {
  // const monthly = () => {
  //   monthPlan.map((plans) => {
  //     return <Month key={plans.id} plan={plans} />
  //   })
  // }

  return (
    <div className="wrapper">
      <div className="head">
        <h2>Select Your Plan</h2>
        <p>You have the option for monthly or yearly billing.</p>
      </div>
      <Outlet />
      <div className="select-plan">
        <Link to="monthly">Monthly</Link>
        <div className="click-btn">
          <span>0</span>
        </div>
        <Link to="yearly">Yearly</Link>
      </div>
      <div className="btn">
        <button id="go">Go Back</button>
        <button>Next Step</button>
      </div>
    </div>
  )
}
export default SelectPlan

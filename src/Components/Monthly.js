import { monthPlan } from '../Data'
import Month from './Month'

const Monthly = () => {
  return (
    <div className="plan">
      {monthPlan.map((months) => {
        const { id, image, plan, amount } = months
        return <Month key={id} plan={plan} amount={amount} image={image} />
      })}
    </div>
  )
}
export default Monthly

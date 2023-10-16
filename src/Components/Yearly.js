import { yearplan } from '../Data'
import Year from './Year'

const Yearly = () => {
  return (
    <div className="plan">
      {yearplan.map((years) => {
        const { id, image, plan, amount } = years
        return <Year key={id} plan={plan} amount={amount} image={image} />
      })}
    </div>
  )
}
export default Yearly

import { yearly } from '../Data'
import Month from './Month'
import Year from './Year'
const Plans = () => {
  return (
    <div className="Yplan">
      {yearly.map((plans) => {
        return <Year key={plans.id} plan={plans} />
      })}
    </div>
  )
}
export default Plans

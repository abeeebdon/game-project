import { yearplan } from '../Data'
const Plans = ({ card, plans }) => {
  const { image, plan, amount } = card
  return (
    <div className="plan-item">
      <img src={image} alt="Arcade" />
      <h3>{plan}</h3>
      <p>{amount}</p>
      {plans === yearplan ? (
        <p className="free">2 months free</p>
      ) : (
        <p style={{ display: 'none' }}></p>
      )}
    </div>
  )
}
export default Plans

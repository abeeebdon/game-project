import { yearplan } from '../Data'

const Plans = ({ card, plans, user, setUser }) => {
  const { image, plan, amount, id } = card

  const handleClickk = (id) => {
    const game = plans.find((plan) => plan.id === id)
    console.log(game.duration)
    const addUser = { ...user, duration: game.duration, plan: game.plan }
    setUser(addUser)
    console.log(addUser)
  }
  return (
    <div className="plan-item" onClick={() => handleClickk(id)}>
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

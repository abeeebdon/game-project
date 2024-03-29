import { useState } from 'react'
import { yearplan } from '../../Data'

const Plans = ({ card, plans, user, setUser }) => {
  const { image, plan, amount, id } = card
  const [toggle, setToggle] = useState(false)

  const handleClickk = (id) => {
    setToggle(!toggle)
    const game = plans.find((plan) => plan.id === id)
    const addUser = {
      ...user,
      duration: game.duration,
      plan: game.plan,
      planPrice: game.amount,
    }
    setUser(addUser)
  }
  return (
    <div
      className={toggle ? 'plan-item' && 'plan-item-toggle' : 'plan-item'}
      onClick={() => handleClickk(id)}
    >
      <img src={image} alt="Arcade" className="img" />
      <h3>{plan}</h3>
      <p>{amount}</p>
      {plans === yearplan ? (
        <p className="free">2 months free</p>
      ) : (
        <p style={{ visibility: 'hidden' }}>no months free</p>
      )}
    </div>
  )
}
export default Plans

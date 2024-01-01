import { useState } from 'react'
import { yearplan } from '../Data'

const Plans = ({ card, plans, user, setUser }) => {
  const { image, plan, amount, id } = card
  const [toggle, setToggle] = useState(false)

  const handleClickk = (id) => {
    setToggle(!toggle)
    const game = plans.find((plan) => plan.id === id)
    console.log(game.duration)
    const addUser = { ...user, duration: game.duration, plan: game.plan }
    setUser(addUser)
    console.log(addUser)
  }
  return (
    <div
      className={toggle ? 'plan-item' && 'plan-item-toggle' : 'plan-item'}
      onClick={() => handleClickk(id)}
    >
      <img src={image} alt="Arcade" className="plan-item-img" />
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

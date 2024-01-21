import { useState } from 'react'

const Card = ({ pick, picks, user, setUser }) => {
  const { text, paragraph, id } = pick
  const [pickToggle, setPickToggle] = useState(false)
  const handleCheck = (e) => {
    setPickToggle(!pickToggle)

    if (e.target.value) {
      const picked = picks.find((pick) => pick.id === id)
      if (user.pick) {
        if (picked.paragraph === user.pick) {
          return
        }
        user.pick.push(picked.paragraph)
      } else {
        const addToUser = { ...user, pick: [picked.paragraph] }
        setUser(addToUser)
      }
    }
  }

  return (
    <div className="add-item">
      <input type="checkbox" onChange={(e) => handleCheck(e)} />
      <div className="text">
        <h3 className="mblue">{text}</h3>
        <p>{paragraph}</p>
        <p style={{ color: 'red' }}>{pickToggle}</p>
      </div>
      <p className="pblue">+$10/yr</p>
    </div>
  )
}
export default Card

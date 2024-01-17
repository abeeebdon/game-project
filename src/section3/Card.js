import { useState } from 'react'

const Card = ({ pick, picks, user, setUser }) => {
  const { text, paragraph, id } = pick
  const [pickToggle, setPickToggle] = useState(false)
  const handleCheck = (e) => {
    if (e.target.value) {
      const picked = picks.find((pick) => pick.id === id)
      console.log(e.target.value)
      if (user.pick) {
        if (picked.paragraph === user.pick) {
          return
        }
        user.pick.push(picked.paragraph)
      } else {
        const addToUser = { ...user, pick: [picked.paragraph] }
        setUser(addToUser)
      }

      console.log(user)
    }
  }
  const handlePickToggle = () => {
    setPickToggle(!pickToggle)
    console.log(pickToggle)
    if (pickToggle === true) {
      console.log('true')
    } else {
      console.log(false)
    }
  }

  return (
    <div className="add-item">
      <input
        type="checkbox"
        onClick={(e) => handlePickToggle(e)}
        onChange={(e) => handleCheck(e)}
      />
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

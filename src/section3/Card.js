const Card = ({ pick, picks, user, setUser }) => {
  const { text, paragraph, id } = pick

  const handleCheck = (e) => {
    const picked = picks.find((pick) => pick.id === id)
    console.log(e.target.value)
    if (user.pick) {
      user.pick.push(picked.paragraph)
    } else {
      const addToUser = { ...user, pick: [picked.paragraph] }
      setUser(addToUser)
    }

    console.log(user)
  }

  return (
    <div className="add-item">
      <input type="checkbox" onChange={(e) => handleCheck(e)} />
      <div className="text">
        <h3 className="mblue">{text}</h3>
        <p>{paragraph}</p>
      </div>
      <p className="pblue">+$10/yr</p>
    </div>
  )
}
export default Card

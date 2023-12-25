const Card = ({ pick }) => {
  const { text, paragraph, id } = pick

  const handleCheck = (e) => {
    console.log('checked')
    console.log(e.target.value)
  }

  return (
    <div className="add-item">
      <button className="check">
        <input type="checkbox" onChange={(e) => handleCheck(e)} />
      </button>
      <div className="text">
        <h3 className="mblue">{text}</h3>
        <p>{paragraph}</p>
      </div>
      <p className="pblue">+$10/yr</p>
    </div>
  )
}
export default Card

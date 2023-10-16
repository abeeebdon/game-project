const Year = ({ image, plan, amount }) => {
  return (
    <div className="plan-item">
      <img src={image} alt="Arcade" />
      <div>
        <h3>{plan}</h3>
        <p>{amount}</p>
        <p className="free">2 months free</p>
      </div>
    </div>
  )
}
export default Year

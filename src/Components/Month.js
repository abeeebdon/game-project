const Month = ({ image, plan, amount }) => {
  return (
    <div className="plan-item">
      <img src={image} alt="Arcade" />
      <h3>{plan}</h3>
      <p>{amount}</p>
    </div>
  )
}
export default Month

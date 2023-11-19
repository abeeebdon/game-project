import checkmark from '../assets/images/icon-checkmark.svg'

const Card = ({ pick }) => {
  const { text, paragraph } = pick

  return (
    <div className="add-item">
      <button className="check">
        <img src={checkmark} alt="img" />
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

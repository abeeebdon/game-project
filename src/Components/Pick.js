import { picks } from '../Data'
import checkmark from '../assets/images/icon-checkmark.svg'
import { useNavigate } from 'react-router-dom'

const Pick = () => {
  // const next = 'finish'
  const navigate = useNavigate()

  return (
    <div className="wrapper">
      <div className="head">
        <h2>Pick add-ons</h2>
        <p>Add ons help enhance your gaming experience.</p>
      </div>
      <div className="add-ons">
        {picks.map((pick) => {
          const { id, text, paragraph } = pick
          return (
            <div className="add-item" key={id}>
              <button className="check">
                <img src={checkmark} alt="img" />
              </button>
              <div className="one">
                <h3 className="mblue">{text}</h3>
                <p>{paragraph}</p>
              </div>
              <p className="pblue">+$10/yr</p>
            </div>
          )
        })}
      </div>
      <div className="btn" style={{ marginTop: '50px' }}>
        <button id="go">Go Back</button>
        <button onClick={() => navigate('summary')}>Next Step</button>
      </div>
    </div>
  )
}
export default Pick

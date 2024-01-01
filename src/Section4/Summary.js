import { useNavigate } from 'react-router-dom'
import Head from '../Head'
import './summary.css'
const Summary = ({ user }) => {
  const { plan, planPrice, pick } = user
  const navigate = useNavigate()
  return (
    <div className="wrapper">
      <Head
        head="Finishing Up"
        paragraph="Double-check everything looks OK before confirming"
      />
      <div className="sum-content">
        <div className="sum">
          <div className="sum-text">
            <h3>{plan}</h3>
            <button className="btn-change">Change</button>
          </div>
          <div className="sum-price">{planPrice}</div>
        </div>

        {pick.map((pic) => {
          return (
            <div className="sum">
              <div className="sum-text">
                <h3>{pic}</h3>
                <button className="btn-change">Change</button>
              </div>
              <div className="sum-price">$9/mo</div>
            </div>
          )
        })}

        <div className="sum" id="no-background">
          <div className="sum-text">
            <h3>Total (per Month)</h3>
            <p>Change</p>
          </div>
          <div className="sum-price">$12/mo</div>
        </div>
      </div>
      <div className="btn-container">
        <div className="btn" style={{ marginTop: '50px' }}>
          <button id="go">Go Back</button>
          <button onClick={() => navigate('../finish')}>Confirm</button>
        </div>
      </div>
    </div>
  )
}
export default Summary

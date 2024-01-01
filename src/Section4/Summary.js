import { useNavigate } from 'react-router-dom'
const Summary = () => {
  const navigate = useNavigate()
  return (
    <div className="wrapper">
      <div className="head">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      <div className="sum-content">
        <div className="sum">
          <div className="sum-text">
            <h3>Arcade (Monthly)</h3>
            <p>Change</p>
          </div>
          <div className="sum-price">$9/mo</div>
        </div>
        <div className="sum">
          <div className="sum-text">
            <h3>Arcade (Monthly)</h3>
            <p>Change</p>
          </div>
          <div className="sum-price">$9/mo</div>
        </div>
        <div className="sum">
          <div className="sum-text">
            <h3>Arcade (Monthly)</h3>
            <p>Change</p>
          </div>
          <div className="sum-price">$9/mo</div>
        </div>
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
          <button onClick={() => navigate('finish')}>Confirm</button>
        </div>
      </div>
    </div>
  )
}
export default Summary

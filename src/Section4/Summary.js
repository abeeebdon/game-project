import Head from '../Head'
import Button from '../Button'
import './summary.css'
const Summary = ({ user }) => {
  const { plan, planPrice, pick } = user

  const pickSet = new Set(pick)
  const picks = [...pickSet]

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

        {picks.map((pic) => {
          return (
            <div className="sum" key={pic.id}>
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
        <Button btn="Confirm" position="right" target="finish" />
      </div>
    </div>
  )
}
export default Summary

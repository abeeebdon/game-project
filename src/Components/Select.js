const Select = ({ monthly, yearly }) => {
  return (
    <div className="select-plan">
      <button
        className="changePlan"
        onClick={() => {
          monthly()
        }}
      >
        Monthly
      </button>
      <div className="click-btn">
        <span>0</span>
      </div>
      <button
        className="changePlan"
        onClick={() => {
          yearly()
        }}
      >
        Yearly
      </button>
    </div>
  )
}
export default Select

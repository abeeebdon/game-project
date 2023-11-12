import { NavLink } from 'react-router-dom'
const Sidebar = ({ number, name, link }) => {
  return (
    <div className="list">
      <NavLink to={link}>{number}</NavLink>
      <div>
        <h5 className="head5">step{number}</h5>
        <p className="sideName">{name}</p>
      </div>
    </div>
  )
}
export default Sidebar

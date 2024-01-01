import { NavLink } from 'react-router-dom'
import side from '../Side'

const Sidebar = () => {
  return (
    <div className="container">
      {side.map((sideLinks) => {
        const { number, name, link } = sideLinks
        return (
          <div className="list" key={number}>
            <NavLink to={link}>{number}</NavLink>
            <div>
              <h5 className="head5">step{number}</h5>
              <p className="sideName">{name}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar

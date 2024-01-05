import { NavLink } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'
import { side } from '../Data'
const Sidebar = () => {
  const { width } = useWindowSize()
  return (
    <div className="aside-container">
      {side.map((sideLinks) => {
        const { number, name, link } = sideLinks
        return (
          <div className="list" key={number}>
            <NavLink to={link}>{number}</NavLink>
            <div className={width < 650 ? 'hide' : 'show'}>
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

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
            <div>
              <h5 className={width < 650 ? 'head5 hide' : 'head5 show'}>
                step{number}
              </h5>
              <p className="sideName">{name}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar

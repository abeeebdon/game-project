import Sidebar from './Sidebar'
import side from '../Side'

const Main = () => {
  return (
    <div className="container">
      {side.map((linked) => {
        const { number, name, link } = linked
        return <Sidebar key={number} number={number} name={name} link={link} />
      })}
    </div>
  )
}
export default Main

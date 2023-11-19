import Head from '../Components/Head'
import { picks } from '../Data'
import { useNavigate } from 'react-router-dom'
import Card from './Card'

const Pick = () => {
  const navigate = useNavigate()

  return (
    <div className="wrapper">
      <Head
        head="Pick add-ons"
        paragraph="Add ons help enhance your gaming experience."
      />

      <div className="add-ons">
        {picks.map((pick) => {
          return <Card pick={pick} key={pick.id} />
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

import { useNavigate } from 'react-router-dom'

const Button = ({ btn, position, target }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (target) {
      navigate(`/${target}`)
    } else {
      navigate('/')
    }
  }

  return (
    <button id={position} onClick={handleClick}>
      {btn}
    </button>
  )
}
export default Button

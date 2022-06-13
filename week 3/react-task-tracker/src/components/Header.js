import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //   console.log('click');
  // }

  const location = useLocation()

  return (
    <header>
      <h1 className='header'>{title}</h1>
      {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'add'} onClick={onAdd} />}
    </header>
  )
}

Header.defaultProps = {
  title: 'task tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'black'
// }

export default Header
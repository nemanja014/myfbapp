import spinner from '../assets/spinner.gif'

function Spinner() {
  return <img source={spinner} alt='Loading...' style={{
      width: '100px',
      margin: 'auto',
      display: 'block'
  }} />
}

export default Spinner

import c from './Return.module.scss'
import arrow from '../../assets/img/arrow-up-svgrepo-com.svg'

const Return = () => {
  return (
    <button className={c.button} onClick={() => window.scrollTo(0,0)}>
      <img src={arrow} alt=""/>
    </button>
  )
}

export default Return;
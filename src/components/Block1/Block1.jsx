import c from './Block_1.module.scss';
import img from '../../assets/img/image2.webp'

let Block1 = (p) => {
  return (<>
      <div ref={p.refView} className={`${c.block_1} ${p.view ? 'show' : ''}`}>
        <div className={c.block_text}>
          <div className='mb-4'><h2><b>Зарабатывайте <br></br> от 50 000р в месяц</b></h2></div>
          <div className='mb-5'>Подключение за 5 минут<br></br>
            Работайте тогда, когда удобно<br></br>
            Крупнейший автопарк в г.Омске
          </div>
          <div>
            <button className={c.button}>Заполнить анкету</button>
          </div>
        </div>
        <div className={c.block_img}><img src={img} alt=""/></div>
      </div>
      <div id={'1'}></div>
    </>

  );
}

export default Block1;
import c from './Block_4.module.scss';
import img from '../../assets/img/image3.webp';
import phone1 from '../../assets/img/phone1.png';
import phone2 from '../../assets/img/phone2.png';
import googleplay from '../../assets/img/googleplay.png';

let Block4 = () => {
  return (
    <>
      <div className={`${c.block_4}`}>
        <div className={c.block_text}  id={4}>
          <div className='mb-4'><h2><b>Мобильное приложение</b></h2></div>
          <div className='mb-5'>Мы разработали мобильное приложение для того,<br></br>чтобы вам было удобно!</div>
          <div><img src={googleplay} alt=""/></div>
        </div>
        <div className={c.block_img}>
          <img className={c.img} src={img} alt=""/>
          <div className={c.phones}>
            <img className={c.phone1} src={phone1} alt=""/>
            <img className={c.phone2} src={phone2} alt=""/>
          </div>
          <div id={'4'}></div>
        </div>
      </div>
    </>

  );
}

export default Block4;
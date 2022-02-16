import c from './Block_4.module.css';
import img from './../../img/image3.png';
import phone1 from './../../img/phone1.png';
import phone2 from './../../img/phone2.png';
import googleplay from './../../img/googleplay.png';

let Block_4 = () => {
    return (
        <div className={`${c.block_4}`}>
            <div className={c.block_text}>
                <div className='mb-4'><h2><b>Мобильное приложение</b></h2></div>
                <div className='mb-5'>Мы разработали мобильное приложение для того,<br></br>чтобы вам было удобно!</div>
                <div><img src={googleplay} alt="" /></div>
            </div>
            <div className={c.block_img}>
                <img className={c.img} src={img} alt="" />
                <img className={c.phone1} src={phone1} alt="" />
                <img className={c.phone2} src={phone2} alt="" />
            </div>
        </div>
    );
}

export default Block_4;
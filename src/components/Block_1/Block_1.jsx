import c from './Block_1.module.css';
import img from './../../img/image2.png'

let Block_1 = () => {
    return (
        <div className={c.block_1}>
            <div className={c.block_text}>
                <div className='mb-4'><h2><b>Зарабатывайте <br></br> от 50 000р в месяц</b></h2></div>
                <div className='mb-5'>Подключение за 5 минут<br></br>
                    Работайте тогда, когда удобно<br></br>
                    Крупнейший автопарк в г.Омске
                </div>
                <div><button className={c.button}>Заполнить анкету</button></div>
            </div>
            <div className={c.block_img}><img src={img} alt="" /></div>
        </div>
    );
}

export default Block_1;
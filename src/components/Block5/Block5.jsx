import c from './Block_5.module.scss';
import wapp from '../../assets/img/wapp.png';
import viber from '../../assets/img/viber.png';

let Block5 = () => {
    return (
        <div className={`container ${c.block_5}`}>
            <div><h2><b>Контакты</b></h2></div>
            <div className={c.list}>
                <div className={c.item}>
                    <div>
                        <img className={c.item_img} src={wapp} alt="" />Написать в What's App
                    </div>
                    <div className={c.gray}>тел.: <b> 8 (3812) 49-46-45</b></div>
                    <div className={c.gray}>Email: <b> info@taxi.ru</b></div>
                </div>
                <div className={c.item}>
                    <div>
                        <img className={c.item_img} src={viber} alt="" />Написать в Viber
                    </div>
                    <div className={c.gray}>тел.: <b> 8 (903) 00-00-00</b></div>
                    <div className={c.gray}>
                        Офис: <b> г.Омск, ул.Дмитриева 15/1</b>
                        <div className='text-center'><u>показать на карте</u></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Block5;
import c from './Block_7.module.scss';
import arrow from '../../assets/img/Vector.svg'

let Block7 = () => {
    return (
        <div className={c.block_7}>
            <b>Нет автомобиля?</b>Работать на авто компании <img src={arrow} alt="" />
        </div>
    );
}

export default Block7;
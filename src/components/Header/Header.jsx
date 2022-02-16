import c from './Header.module.css';
import logo from './../../img/yandex_taxi_logo_norm.svg';

let Header = () => {
    return (
        <div className={`${c.header} pe-5 ps-5`}>
            <div className="row">
                <div className="col-4">
                    <div className={c.logo_block}>
                        <div><img src={logo} alt="логотип" /></div>
                        <div>Официальный партнер <br></br> г.Омск</div>
                    </div>
                </div>
                <div className="col-5">
                    <div className={c.nav}>
                        <div><a href="#1">Начало работы</a></div>
                        <div><a href="#2">Преимущества работы</a></div>
                        <div><a href="#3">Приложение</a></div>
                        <div><a href="#4">Контакты</a></div>
                    </div>
                </div>
                <div className="col-3">
                    <div className={`${c.tel}`}>
                        <div><b>8 (3812) 49-46-45</b></div>
                        <div className={c.req}>заказать звонок</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
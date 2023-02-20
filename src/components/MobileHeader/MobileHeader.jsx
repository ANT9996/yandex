import c from './Mobile_Header.module.scss';
import logo from '../../assets/img/yandex_taxi_logo_norm.svg';

let MobileHeader = () => {
    return (
            <div className={`${c.header}`}>
                <div><img src={logo} alt="" /></div>
                <div className={c.menu_button}> 
                    =
                    <div className={c.menu}>
                            <div><a href="#1">Начало работы</a></div>
                            <div><a href="#2">Преимущества работы</a></div>
                            <div><a href="#3">Приложение</a></div>
                            <div><a href="#4">Контакты</a></div>
                    </div>
                </div>
            </div>        
    );
}

export default MobileHeader;
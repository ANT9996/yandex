import c from './Mobile_Header.module.css';
import logo from './../../img/yandex_taxi_logo_norm.svg';

let Mobile_Header = () => {
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

export default Mobile_Header;
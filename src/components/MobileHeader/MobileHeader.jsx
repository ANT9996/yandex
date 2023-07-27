import c from './Mobile_Header.module.scss';
import logo from '../../assets/img/yandex_taxi_logo_norm.svg';
import {useState} from "react";

let MobileHeader = () => {
    const [opened, setOpened] = useState(false);

    return (
            <div className={`${c.header}`}>
                <div><img src={logo} alt="" /></div>
                <div className={c.menu_button} onClick={() => setOpened(!opened)}>
                    =
                    <div className={c.menu} hidden={!opened}>
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
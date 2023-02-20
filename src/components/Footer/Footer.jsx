import c from './Footer.module.scss';

let Footer = () => {
    return (
        <div className={c.footer_background}>
            <div className="container p-0">
                <div className={c.footer}>
                    <div className={c.footer_left}>
                        <div className='mb-3'>
                            Официальный партнер Яндекс Такси<br></br>
                            г.Омск
                        </div>
                        <div>ОГРНИП 12345432112344</div>
                    </div>
                    <div>
                        <ul className={c.menu}>
                            <li>Начало работы</li>
                            <li>Преимущества работы</li>
                            <li>Отзывы</li>
                            <li>Приложение</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                    <div className={c.pol}>
                        <div>Политика конфиденциальности</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
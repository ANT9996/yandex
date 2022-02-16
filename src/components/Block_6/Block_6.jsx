import React, { useState } from "react";
import c from './Block_6.module.css';
import img from './../../img/image4.png';

let Block_6 = () => {
    const [fio, setFio] = useState('');
    const [tel, setTel] = useState('');

    return (
        <div className={c.block_6}>
            <div className={c.block_text}>
                <div className='mb-4'><h2><b>Оставить заявку</b></h2></div>
                <div className={c.form}>
                    <form action="/send">
                        <div className={c.field}>
                            <div>ФИО</div>
                            {fio}
                            <input id="fio" type="text" name="fio" value={fio} onChange={event => setFio(event.target.value)} required/>
                        </div>
                        <div className={c.field}>
                            <div>Телефон</div>
                            {tel}
                            <input id="tel" type="tel" name="tel" value={tel} onChange={event => setTel(event.target.value)} required/>
                        </div>
                        <div className={c.form_submit}>
                            <div className={c.submit_button}>
                                <input type="submit" value="Отправить" />
                            </div>
                            <div className={c.submit_info}>
                                Нажимая кнопку, вы соглашаетесь<br></br>
                                <u>с политикой конфиденциальности</u> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={c.block_img}><img src={img} alt="" /></div>
        </div>
    );
}

export default Block_6;
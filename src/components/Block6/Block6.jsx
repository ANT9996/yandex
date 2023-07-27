import c from './Block_6.module.scss';
import img from '../../assets/img/image4.webp';
import sendEmail from './../../SendMessage';

let Block6 = () => {
    return (
        <div className={c.block_6}>
            <div className={c.block_text} id={5}>
                <div className='mb-4'><h2><b>Оставить заявку</b></h2></div>
                <div className={c.form}>
                    <form onSubmit={sendEmail} action="#">
                        <div className={c.field}>
                            <div>ФИО</div>
                            <input id="fio" type="text" name="fio" placeholder={'Сергеев Иван Алексеевич'} required />
                        </div>
                        <div className={c.field}>
                            <div>Телефон</div>
                            <input id="tel" type="tel" name="tel" placeholder={'+7 (495) 000-00-00'} required />
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

export default Block6;
import c from './Block_3.module.scss';
import img from '../../assets/img/image.png';
import calc from '../../assets/img/calc.svg';
import money from '../../assets/img/money.svg';
import wrench from '../../assets/img/wrench.svg';

let Block3 = () => {
  return (
    <>
      <div className={c.block_3}>
        <div className={c.block_text}>
          <div className='mb-4'><h2><b>Работа в удовольствие</b></h2></div>
          <div className={`mb-4 ${c.work}`}>
            <div className={`${c.zag}`}><img src={calc} alt=""/>Удобный график</div>
            <div className={c.work_text}>Работа по несколько часов в неделю или <br></br> каждый день - вы сами
              выбираете свой <br></br> график
            </div>
          </div>
          <div className={`mb-4 ${c.work}`}>
            <div className={`${c.zag}`}><img src={money} alt=""/>Деньги - сразу</div>
            <div className={c.work_text}>Выводите деньги с помощью удобного <br></br> мобильного приложения</div>
          </div>
          <div className={`mb-4 ${c.work}`}>
            <div className={`${c.zag}`}><img src={wrench} alt=""/>Партнерская программа</div>
            <div className={c.work_text}>Скидка 20% на ремонт и сервисное <br></br> обслуживание для водителей парка</div>
          </div>
        </div>
        <div className={c.block_img}><img src={img} alt=""/></div>
      </div>
      <div id={'3'}></div>
    </>

  );
}

export default Block3;
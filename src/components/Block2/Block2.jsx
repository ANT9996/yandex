import c from './Block_2.module.scss';

let Block2 = (p) => {
  return (
    <>
      <div className={`${c.block_2} container ${p.view ? 'show' : ''}`}>
        <div><h3>Начало работы</h3></div>
        <div>
          <div className={c.start}>
            <div>
              <div className={c.zag}>
                <mark>1.</mark>
                <u>Оставьте заявку</u> на сайте
              </div>
              <div className='mt-3'>мы свяжемся с вами для уточнения <br></br> деталей</div>
            </div>
            <div>
              <div className={c.zag}>
                <mark>2.</mark>
                <u>Скачайте</u> приложение
              </div>
              <div className='mt-3'>для удобного вывода средств</div>
            </div>
            <div>
              <div className={c.zag}>
                <mark>3.</mark>
                Выходите на линию
              </div>
              <div className='mt-3'>чтобы получить первые заказы</div>
            </div>
            <div>
              <div className={c.zag}>
                <mark>4.</mark>
                Начните зарабатывать
              </div>
              <div className='mt-3'>работайте тогда, когда вам удобно</div>
            </div>
          </div>
        </div>
      </div>
      <div id={'2'}></div>
    </>

  );
}

export default Block2;
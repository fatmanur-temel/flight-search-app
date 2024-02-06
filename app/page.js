import Image from 'next/image'
import styles from './page.module.css'
import depratureTo from '@/public/images/to.svg'
import depratureFrom from '@/public/images/from.svg'
import calendar from '@/public/images/calendar.svg'

export default function Home() {
  return (
    <div className={styles.home_container}>
      <div className='container'>
        <div className={styles.home_title}>
          <h1>Uçmaya Hazır Mısın?</h1>
        </div>
        <div className={`${styles.search_box} col-5`}>
          <form action="#" method='post'>
            <div className='row'>
              <div className='col'>
                <label htmlFor="">
                  <Image
                    src={depratureFrom}
                    width="29"
                    height="20"
                    alt="deprature from icon" />
                  <span>Nereden</span>
                </label>
                <input type="text" />
              </div>
              <div className='col'>
                <label htmlFor="">
                  <Image
                    src={depratureTo}
                    width="29"
                    height="20"
                    alt="deprature to icon" />
                  <span>Nereye</span>
                </label>
                <input type="text" />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <label htmlFor="">
                  <Image
                    src={calendar}
                    width="29"
                    height="20"
                    alt="calendar icon" />
                  <span>Gidiş Tarihi</span>
                </label>
                <input type="text" />
              </div>
              <div className='col'>
                <label htmlFor="">
                  <Image
                    src={calendar}
                    width="29"
                    height="20"
                    alt="calendar icon" />
                  <span>
                    Dönüş Tarihi
                    <label htmlFor="" className={styles.one_way_input}>
                      <input type="checkbox" />
                      Tek Yön
                    </label>
                  </span>
                </label>
                <input type="text" />
              </div>
            </div>
            <div className='row'>
              <div className="col">
                <button type='button' className={styles.search_btn}>
                  <span>Uçuş Ara</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

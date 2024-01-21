import Image from 'next/image'
import styles from './page.module.css'
import depratureTo from '@/images/to.svg'
import depratureFrom from '@/images/from.svg'
import calendar from '@/images/calendar.svg'

export default function Home() {
  return (
    <div className={styles.home_container}>
      <div>
        <h1 className={styles.home_title}>Uçmaya Hazır Mısın?</h1>
      </div>
      <div className={styles}>
        <form action="#" method='post'>
          <div className='row-2'>
            <div>
              <label htmlFor="">
                <Image 
                  src={depratureFrom}
                  width="30"
                  height="24" 
                  alt="deprature from icon" />
                Nereden
              </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">
                <Image 
                  src={depratureTo}
                  width="30"
                  height="24" 
                  alt="deprature to icon" />
                Nereye
              </label>
              <input type="text" />
            </div>
          </div>
          <div className='row-2'>
          <div>
              <label htmlFor="">
                <Image 
                  src={calendar}
                  width="30"
                  height="24" 
                  alt="calendar icon" />
                Gidiş Tarihi
              </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">
              <Image 
                  src={calendar}
                  width="30"
                  height="24" 
                  alt="calendar icon" />
                Dönüş Tarihi
              </label>
              <input type="text" />
              <label htmlFor="">
                <input type="checkbox" />
                Tek Yön
              </label>
            </div>
          </div>
          <div className='row-1'>
            <button type='button'>
              <span>Uçuş Ara</span>
              <i></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

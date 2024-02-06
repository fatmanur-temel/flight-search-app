import React from 'react'
import Image from 'next/image'
import FlightTable from '@/components/FlightTable'
import styles from './styles.module.css'
import depratureTo from '@/public/images/to.svg'
import depratureFrom from '@/public/images/from.svg'
import calendar from '@/public/images/calendar.svg'
import Flights from '@/mocks/flights.json'

function Result() {
  return (
    <div>
      <div className={styles.search_area}>
        {/* Flight search area */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 col-12">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="">
                        <Image
                          src={depratureFrom}
                          width="20"
                          height="20"
                          alt="deprature from icon" />
                        <span>Nereden</span>
                      </label>
                      <input type="text" />
                    </div>
                    <div className="col-6">
                      <label htmlFor="">
                        <Image
                          src={depratureTo}
                          width="20"
                          height="20"
                          alt="deprature to icon" />
                        <span>Nereye</span>
                      </label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="">
                        <Image
                          src={calendar}
                          width="20"
                          height="20"
                          alt="calendar icon" />
                        <span>Gidiş Tarihi</span>
                      </label>
                      <input type="text" />
                    </div>
                    <div className="col-6">
                      <label htmlFor="">
                        <Image
                          src={calendar}
                          width="20"
                          height="20"
                          alt="calendar icon" />
                        <span>Dönüş Tarihi</span>
                      </label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-12">
              <button type='button' className={styles.search_btn}>
                <span>Uçuş Ara</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        {/* search result area */}
        <div className="row">
          <div className="col-lg-6">
            <div className={`${styles.search_header} ${styles.yellow}`}>
              <span>Gidiş</span>
            </div>
            <FlightTable flights={Flights.flights} />
          </div>
          <div className="col-lg-6">
            <div className={`${styles.search_header} ${styles.green}`}>
              <span>Dönüş</span>
            </div>
            <FlightTable flights={Flights.flights} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result
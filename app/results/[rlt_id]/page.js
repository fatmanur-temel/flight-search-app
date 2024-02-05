import React from 'react'
import Image from 'next/image'
import FlightTable from '@/components/FlightTable'
import styles from './styles.module.css'
import depratureTo from '@/images/to.svg'
import depratureFrom from '@/images/from.svg'
import calendar from '@/images/calendar.svg'
import Flights from '@/mocks/flights.json'

function Result() {
    // console.log(Flights.flights[0]);
    return (
      <div>
        <div>
          {/* Flight search area */}
          <div className="container">
            <div className="col-lg11 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="row">
                    <div className="col-6">
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
                    <div className="col-6">
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
                </div>
                <div className="col-lg-6 col-12">
                  <div className="row">
                    <div className="col-6">
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
                    <div className="col-6">
                      <label htmlFor="">
                        <Image
                          src={calendar}
                          width="29"
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
            <div className="col-lg-1 col-md-12 col-12">
              <button type='button' className={styles.search_btn}>
                <span>Uçuş Ara</span>
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          {/* search result area */}
          <div className="row">
            <div className="col-lg-6">
              <div className="search-header">
                <span>Gidiş</span>
              </div>
              <FlightTable flights={Flights.flights} />
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    )
  }

  export default Result
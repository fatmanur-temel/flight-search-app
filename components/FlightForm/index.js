'use client'
import React, { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import depratureTo from '@/public/images/to.svg'
import depratureFrom from '@/public/images/from.svg'
import calendar from '@/public/images/calendar.svg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function FlightForm({ handleSearch }) {
    //Datepicker
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    //form value
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');

    // Tek yön seçimi ile input alanını disabled yapma
    const [returnDateDisabled, setReturnDateDisabled] = useState(false);
    const handleChange = (event) => {
        setReturnDateDisabled(event.target.checked);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Form submit edildiğinde Home bileşenine değerleri iletiyoruz
        handleSearch({
          departure,
          arrival,
          startDate,
          endDate,
          returnDateDisabled,
        });
      }

    // console.log(startDate);


    return (
        <form className={styles.flight_form} onSubmit={handleFormSubmit}>
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
                    <input 
                        type="text" 
                        value={departure} 
                        onChange={(e) => setDeparture(e.target.value)}/>
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
                    <input 
                        type="text" 
                        value={arrival} 
                        onChange={(e) => setArrival(e.target.value)}/>
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
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)} />
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
                                <input type="checkbox" name='returnDateDisabled' onChange={handleChange} />
                                Tek Yön
                            </label>
                        </span>
                    </label>
                    <DatePicker
                        disabled={returnDateDisabled}
                        dateFormat="dd/MM/yyyy"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)} />
                </div>
            </div>
            <div className='row'>
                <div className="col">
                    <button type='submit' className={styles.search_btn}>
                        <span>Uçuş Ara</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FlightForm
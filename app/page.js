'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import styles from './page.module.css'
import depratureTo from '@/public/images/to.svg'
import depratureFrom from '@/public/images/from.svg'
import calendar from '@/public/images/calendar.svg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Flights from '@/mocks/flights.json'

function filterFlightsByCriteria(inputData, allFlights) {
  // Burada inputData'den gelen verilere göre mock verileri filtrele
  // Örneğin, kalkış ve varış havaalanlarına göre filtreleme yapabilirsiniz
  const filteredFlights = allFlights.filter((flight) => {
    return (
      flight.from.city === inputData.departure &&
      flight.to.city === inputData.destination &&
      flight.departureDate === inputData.departureDate &&
      flight.arrivalDate === inputData.arrivalDate
    );
  });

  return filteredFlights;
}

export default function Home() {
  // Tek yön seçimi ile input alanını disabled yapma
  const [returnDateDisabled, setReturnDateDisabled] = useState(false);
  const handleChange = (event) => {
    setReturnDateDisabled(event.target.checked);
  }

  //Datepicker
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  //query ile input alanlarında havaalanı arama
  const searchAirports = (query) => {
    return [
      { code: 'IST', city: 'Istanbul' },
      { code: 'ESB', city: 'Ankara' },
      { code: 'AYT', city: 'Antalya' },
      { code: 'ADB', city: 'İzmir' },
      { code: 'DLM', city: 'Dalaman' },
    ];
  };

  //aramaya göre filtreleme ve yönlendirme
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const router = useRouter();

  const handleFlightSearch = () => {
    // Burada mock verileri ile karşılaştırma yapabilir ve sonuçları bulabilirsiniz.
    // Bu örnekte sadece eşleşen uçuşları results sayfasına yönlendiriyoruz.
    const mockData = require('@/mocks/flights.json'); // Mock verileri projeye eklediğiniz yola göre düzenleyin
    const matchedFlights = mockData.flights.filter((flight) => {
      // Eşleşme kriterlerini burada belirleyin
      return (
        flight.departure.toLowerCase() === departure.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase()
      );
    });

    if (matchedFlights.length > 0) {
      // Eğer eşleşen uçuşlar varsa, eşleşenleri results sayfasına parametre olarak gönderin
      router.push({
        pathname: '/results/[rlt_id]',
        query: { flights: JSON.stringify(matchedFlights) },
      });
    } else {
      // Eğer eşleşen uçuş yoksa, kullanıcıya bir mesaj gösterebilirsiniz
      console.log('Eşleşen uçuş bulunamadı.');
    }
  };
  

  return (
    <div className={styles.home_container}>
      <div className='container'>
        <div className={styles.home_title}>
          <h1>Uçmaya Hazır Mısın?</h1>
        </div>
        <div className={`${styles.search_box} col-5`}>
          <form onSubmit={(e) => e.preventDefault()}>
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
                <input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
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
                <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)}/>
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
                      <input type="checkbox" name='returnDateDisabled' onChange={handleChange}/>
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
                <button type='button' className={styles.search_btn} onClick={handleFlightSearch}>
                  <span>Uçuş Ara</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
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

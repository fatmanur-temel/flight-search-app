"use client"
import React from 'react'
import {useRouter} from 'next/navigation';
import styles from './page.module.css'
import FlightForm from '@/components/FlightForm';
import Flights from '@/mocks/flights.json'

export default function Home() {
  const someId = "id"
  const router = useRouter();

  const handleSearch = ({ departure, arrival, startDate, endDate, returnDateDisabled }) => {
    // Filtreleme mantığını buraya ekleyin
    // Örnek: Flights üzerinde filtreleme yaparak filteredFlights state'ini güncelleyin
    const filtered = Flights.flights.filter(flight => {
      flight.from.city.includes(departure) &&
      flight.to.city.includes(arrival)
      //flight.departureDate.includes(startDate)
    });

    router.push(`/results/${someId}`);
  }

  return (
    <div className={styles.home_container}>
      <div className='container'>
        <div className={styles.home_title}>
          <h1>Uçmaya Hazır Mısın?</h1>
        </div>
        <div className={`${styles.search_box} col-5`}>
          <FlightForm handleSearch={handleSearch}/>
        </div>
      </div>
    </div>
  )
}

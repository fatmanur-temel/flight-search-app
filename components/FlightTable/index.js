'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from "./styles.module.css"

const FlightTable = ({ flights }) => {
    const [sortConfig, setSortConfig] = useState({
        key: '',
        direction: 'ascending',
    });

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const calculateFlightDuration = (departureTime, arrivalTime) => {
        const [departureHours, departureMinutes] = departureTime.split(':').map(Number);
        const [arrivalHours, arrivalMinutes] = arrivalTime.split(':').map(Number);

        let hoursDiff = arrivalHours - departureHours;
        let minutesDiff = arrivalMinutes - departureMinutes;

        if (minutesDiff < 0) {
            minutesDiff += 60;
            hoursDiff--;
        }

        return hoursDiff * 60 + minutesDiff; // Süreyi dakika cinsine çevir
    };

    const getClassNamesFor = (name) => {
        if (!sortConfig.key) {
            return;
        }

        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    const sortedFlights = [...flights].sort((a, b) => {
        if (sortConfig.key === 'flightDuration') {
            const durationA = calculateFlightDuration(a.departureTime, a.arrivalTime);
            const durationB = calculateFlightDuration(b.departureTime, b.arrivalTime);

            if (durationA < durationB) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (durationA > durationB) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        }

        else if (sortConfig.key) {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (sortConfig.direction === 'ascending') {
                return aValue.localeCompare(bValue, undefined, { numeric: true });
            } else {
                return bValue.localeCompare(aValue, undefined, { numeric: true });
            }
        }
        return 0;
    });

    return (
        <table className={styles.flight_table}>
            <thead>
                <tr>
                    <th>
                        <span>Havayolu</span>
                    </th>
                    <th onClick={() => requestSort('departureTime')} className={getClassNamesFor('departureTime')}>
                        <span className={styles.sort_icons}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="t-6 bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="b-6 bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                        <span>Kalkış Saati</span>
                    </th>
                    <th onClick={() => requestSort('flightDuration')} className={getClassNamesFor('flightDuration')}>
                        <span className={styles.sort_icons}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="t-6 bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="b-6 bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                        <span>Uçuş Süresi</span>
                    </th>
                    <th onClick={() => requestSort('arrivalTime')} className={getClassNamesFor('arrivalTime')}>
                        <span className={styles.sort_icons}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="t-6 bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="b-6 bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                        <span>Varış Saati</span>
                    </th>
                    <th onClick={() => requestSort('price')} className={getClassNamesFor('price')}>
                        <span className={styles.sort_icons}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="t-6 bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="b-6 bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                        <span>Fiyat</span>
                    </th>
                </tr>
            </thead>
            <tbody className={styles.table_body}>
                {sortedFlights.map((flight) => (
                    <tr key={flight.id}>
                        <td>
                            <Image
                                src={flight.airlineLogo}
                                width="25"
                                height="25"
                                loading='lazy'
                                alt="company logo" />
                            <p>{flight.airline}</p>
                        </td>
                        <td>
                            <p>{flight.departureTime}</p>
                            <p>{flight.from.short}</p>
                        </td>
                        <td>
                            <p>{calculateFlightDuration(flight.departureTime, flight.arrivalTime)} dk</p>
                            <div className={styles.transmission}>
                                <span className={styles.line_arrow}></span>
                            </div>
                        </td>
                        <td>
                            <p>{flight.arrivalTime}</p>
                            <p>{flight.to.short}</p>
                        </td>
                        <td>
                            <p>{flight.price} TL</p>
                            <button>Detay</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfood>
                <tr role="row">
                    <td colSpan="11" data-column="0">
                        <h3 className="no-flight-found">Kriterlerinize uygun uçuş bulunamamıştır.</h3>
                    </td>
                </tr>
            </tfood>
        </table>
    )
}

export default FlightTable
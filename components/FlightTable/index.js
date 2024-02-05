'use client'
import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import styles from "./styles.module.css"
import THY from "@/images/thy-logo.png"
import AJET from "@/images/anadolujet-logo.png"
import PGS from "@/images/pegasus-logo.png"

function FlightTable({flights}) {
    console.log(flights[0].id)
    return (
        <table>
            <thead>
                <tr>
                    <th>Havayolu</th>
                    <th>Kalkış Saati</th>
                    <th>Uçuş Süresi</th>
                    <th>Varış Saati</th>
                    <th>Fiyat</th>
                </tr>
            </thead>
            <tbody className={styles.table_body}>
                {flights.map((flight) => (
                    <tr key={flight.id}>
                        <td>
                        <Image
                          src={THY}
                          width="25"
                          height="25"
                          loading='lazy'
                          alt="company logo" />
                            <h4>{flight.airline}</h4>
                        </td>
                        <td>
                            <p>{flight.departureTime}</p>
                            <p>{flight.from.short}</p>
                        </td>
                        <td>
                            <p>{flight.flightDuration}</p>
                            <div className={styles.transmission}>
                                <span className={styles.line_arrow}></span>
                            </div>
                        </td>
                        <td>
                            <p>{flight.arrivalTime}</p>
                            <p>{flight.to.short}</p>
                        </td>
                        <td>
                            <p>{flight.price}</p>
                            <button>Detay</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            {/* <tfood>
                <tr role="row">
                    <td colSpan="11" data-column="0">
                        <h3 className="no-flight-found">Kriterlerinize uygun uçuş bulunamamıştır.</h3>
                    </td>
                </tr>
            </tfood> */}
        </table>
    )
}

export default FlightTable
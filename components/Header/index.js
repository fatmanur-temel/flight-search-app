import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import logo from '@/public/images/logo_travel.png'

function Header() {
    return (
        <header className={styles.header}>
            <nav className="navbar">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <Image 
                            src={logo} 
                            alt="logo" 
                            width="113" 
                            height="62" 
                        />
                    </Link>
                    <Link href="https://github.com/fatmanur-temel/flight-search-app" target='_blank'>About</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
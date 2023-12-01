import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <NavLink className={styles.logo} to="/">
            <img alt="Gamba logo" src="/logo-2.svg" />
          </NavLink>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div className={styles.externalLinks}>
            <a href="https://t.me/strudelsonsolana" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href="https://birdeye.so/token/2mnGSkXH1h6x5qmhwoQzAZDKa83vnRf8wNkNWVbdv7w5/7H5ijbPvBqRVBoDMtJhgQetxS9e2KFikP18JrabkctAS?chain=solana" target="_blank" rel="noreferrer">
              Birdeye
            </a>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

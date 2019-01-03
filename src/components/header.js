import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.css'

export default () => (
  <header role="header">
    <h1>James <span className={styles.surname}>Bates</span></h1>
    <nav role="navigation">
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/">Blog</Link>
        </li>
      </ul>
    </nav>
  </header>
)

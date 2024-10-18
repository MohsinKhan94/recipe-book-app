import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Importing CSS Module

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">Recipe Book</Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Recipes">Recipes</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

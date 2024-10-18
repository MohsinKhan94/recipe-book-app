import Link from 'next/link';
import React from 'react';
import styles from './Home.module.css'; 
import Image from 'next/image';
import biryani from '../assets/biryani.jpg';
import korma from '../assets/korma.jpg';
import haleem from '../assets/haleem.jpg';
import nihari from '../assets/nihari.jpg';


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>PAKISTANI FOOD RECIPES</h1>
      <div className={styles['grid-container']}>
        <div className={styles['grid-item']}>
          <Image src={biryani} alt='Biryani' width={350} height={350} className={styles.image} />
          <Link href={'/Biryani'}>
            <button className={styles.button}>View Recipe</button>
          </Link>
        </div>
        <div className={styles['grid-item']}>
          <Image src={korma} alt='Korma' width={350} height={350} className={styles.image} />
          <Link href={'/Korma'}>
            <button className={styles.button}>View Recipe</button>
          </Link>
        </div>
        <div className={styles['grid-item']}>
          <Image src={haleem} alt='Haleem' width={350} height={350} className={styles.image} />
          <Link href={'/Haleem'}>
            <button className={styles.button}>View Recipe</button>
          </Link>
        </div>
        <div className={styles['grid-item']}>
          <Image src={nihari} alt='Nihari' width={350} height={350} className={styles.image} />
          <Link href={'/Nihari'}>
            <button className={styles.button}>View Recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

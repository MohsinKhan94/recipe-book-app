'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import biryani from '@/app/assets/biryani.jpg';
import nihari from '@/app/assets/nihari.jpg';
import korma from '@/app/assets/korma.jpg';
import haleem from '@/app/assets/haleem.jpg';

const Recipes = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#e67e22', textAlign: 'center', fontSize: '3rem', marginBottom: '20px' }}>Our Delicious Recipes</h1>
      
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#34495e', textAlign: 'justify' }}>
        Explore our collection of mouth-watering recipes that bring the flavors of South Asia to your kitchen. From hearty main dishes to delightful sides, there's something for everyone to enjoy!
      </p>

      <h2 style={{ color: '#c0392b', marginTop: '30px',marginBottom:'30px', alignItems:'center', textAlign:'center' }}>Featured Recipes</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '20px' }}>
        {/* Recipe Card 1 */}
        <div style={{ textAlign: 'center', margin: '10px', width: '200px', transition: 'transform 0.2s' }}>
          <Link href="/Biryani">
            <Image src={biryani} alt="Biryani" width={200} height={150} style={{ borderRadius: '10px' }} />
            <h3>Biryani</h3>
            <p>Aromatic rice dish layered with marinated meat or vegetables.</p>
          </Link>
        </div>

        {/* Recipe Card 2 */}
        <div style={{ textAlign: 'center', margin: '10px', width: '200px', transition: 'transform 0.2s' }}>
          <Link href="/Nihari">
            <Image src={nihari} alt="Nihari" width={200} height={150} style={{ borderRadius: '10px' }} />
            <h3>Nihari</h3>
            <p>A rich and flavorful stew, slow-cooked to perfection.</p>
          </Link>
        </div>

        {/* Recipe Card 3 */}
        <div style={{ textAlign: 'center', margin: '10px', width: '200px', transition: 'transform 0.2s' }}>
          <Link href="/Korma">
            <Image src={korma} alt="Korma" width={200} height={150} style={{ borderRadius: '10px' }} />
            <h3>Korma</h3>
            <p>A creamy curry made with meat or vegetables and fragrant spices.</p>
          </Link>
        </div>

        {/* Recipe Card 4 */}
        <div style={{ textAlign: 'center', margin: '10px', width: '200px', transition: 'transform 0.2s' }}>
          <Link href="/Haleem">
            <Image src={haleem} alt="Haleem" width={200} height={150} style={{ borderRadius: '10px' }} />
            <h3>Haleem</h3>
            <p>A nutritious stew made with lentils, wheat, and meat.</p>
          </Link>
        </div>
      </div>

      <h2 style={{ color: '#c0392b', marginTop: '30px' }}>Explore More Recipes</h2>
      <p style={{ fontSize: '1.1rem', color: '#34495e' }}>
        Check out our full list of recipes and find your next favorite dish!
      </p>
      <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#2c3e50', listStyleType: 'circle', marginLeft: '20px' }}>
        <li><Link href="/Biryani">Biryani</Link></li>
        <li><Link href="/Nihari">Nihari</Link></li>
        <li><Link href="/Korma">Korma</Link></li>
        <li><Link href="/Haleem">Haleem</Link></li>
        {/* Add more links to other recipes as needed */}
      </ul>

      <style jsx>{`
        div > div:hover {
          transform: scale(1.05); /* Scale effect on hover */
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
        }
      `}</style>
    </div>
  );
};

export default Recipes;

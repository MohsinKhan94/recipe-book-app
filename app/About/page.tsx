import React from 'react';

const About = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#e67e22', textAlign: 'center', fontSize: '3rem', marginBottom: '20px' }}>ABOUT RECIPE BOOK</h1>
      
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#34495e', textAlign: 'justify' }}>
        Welcome to the Recipe Book! This collection is inspired by the rich and flavorful culinary traditions of South Asia. Whether you’re craving the spicy and aromatic flavors of Biryani, the hearty warmth of Nihari, the smooth richness of Korma, or the wholesome goodness of Haleem, you’ll find it all here. Each recipe is carefully crafted to bring authentic tastes into your kitchen, making sure that the essence of these dishes is preserved. Enjoy the art of cooking and discover the joy of these traditional meals!
      </p>

      <h2 style={{ color: '#c0392b', marginTop: '30px' }}>Recipes Included</h2>
      <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#2c3e50', listStyleType: 'square', marginLeft: '20px' }}>
        <li><strong>Biryani</strong>: A classic layered rice dish with marinated meat or vegetables, flavored with aromatic spices.</li>
        <li><strong>Nihari</strong>: A slow-cooked stew of tender meat and rich spices, perfect for a hearty meal.</li>
        <li><strong>Korma</strong>: A creamy and mild curry made with yogurt and fragrant spices, cooked with meat or vegetables.</li>
        <li><strong>Haleem</strong>: A nutritious stew made with wheat, lentils, and meat, cooked to perfection with a blend of spices.</li>
      </ul>

      <h2 style={{ color: '#c0392b', marginTop: '30px' }}>Why Choose This Recipe Book?</h2>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#34495e', textAlign: 'justify' }}>
        This Recipe Book is more than just a collection of dishes—it’s an invitation to experience the depth of flavors from one of the world’s most diverse food cultures. Each recipe is easy to follow and includes tips to ensure that your meals come out perfect every time. Whether you're a seasoned chef or a beginner in the kitchen, these recipes are sure to delight your taste buds and impress your guests.
      </p>

      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#34495e', textAlign: 'justify' }}>
        Take your cooking to the next level with these flavorful, wholesome, and authentic South Asian recipes!
      </p>
    </div>
  );
};

export default About;

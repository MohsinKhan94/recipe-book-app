import Image from 'next/image';
import React from 'react';
import korma from '@/app/assets/korma.jpg';

const KormaRecipe = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#e67e22', textAlign: 'center', fontSize: '3rem', marginBottom: '20px' }}>KORMA RECIPE</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Image 
          src={korma} 
          alt="Korma Image" 
          width={700} 
          height={450} 
          style={{ borderRadius: '10px' }}
        />
      </div>
      
      <h2 style={{ color: '#c0392b' }}>Ingredients</h2>
      <ul style={{ lineHeight: '1.6' }}>
        <li>Chicken or mutton: 1 kg (cut into pieces)</li>
        <li>Yogurt: 1 cup</li>
        <li>Onions: 3 large (sliced)</li>
        <li>Ginger-garlic paste: 2 tbsp</li>
        <li>Korma masala: 2 tbsp</li>
        <li>Whole spices: bay leaves, cinnamon, cloves, cardamom</li>
        <li>Tomatoes: 2 medium (chopped)</li>
        <li>Oil or ghee: ½ cup</li>
        <li>Almonds and cashews (optional): for garnish</li>
        <li>Fresh coriander: handful (for garnish)</li>
        <li>Salt: to taste</li>
      </ul>

      <h2 style={{ color: '#c0392b' }}>Steps</h2>
      <ol style={{ lineHeight: '1.6' }}>
        <li>Fry onions: Heat oil in a pot and fry sliced onions until golden brown. Remove and set aside.</li>
        <li>Cook meat: In the same oil, add whole spices (bay leaves, cinnamon, cloves, cardamom). Add ginger-garlic paste and meat. Cook until the meat is browned.</li>
        <li>Add spices: Add the korma masala, salt, and tomatoes. Cook until the tomatoes soften and the oil separates.</li>
        <li>Add yogurt: Mix the yogurt into the meat and cook for a few more minutes until the gravy thickens.</li>
        <li>Simmer: Add a little water if needed and simmer the korma on low heat until the meat is tender.</li>
        <li>Garnish: Garnish with fried onions, fresh coriander, and optional almonds or cashews.</li>
        <li>Serve: Serve hot with naan, roti, or rice.</li>
      </ol>
    </div>
  );
};

export default KormaRecipe;

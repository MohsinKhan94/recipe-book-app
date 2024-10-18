import React from 'react';
import nihari from '@/app/assets/nihari.jpg';
import Image from 'next/image';

const NihariRecipe = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#e67e22', textAlign: 'center', fontSize: '3rem', marginBottom: '20px' }}>NIHARI RECIPE</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Image 
          src={nihari} 
          alt="Nihari Image" 
          width={700} 
          height={450} 
          style={{ borderRadius: '10px' }}
        />
      </div>
      
      <h2 style={{ color: '#c0392b' }}>Ingredients</h2>
      <ul style={{ lineHeight: '1.6' }}>
        <li>Beef shank or mutton: 1 kg</li>
        <li>Wheat flour: 4 tbsp (for thickening)</li>
        <li>Onions: 2 large (sliced)</li>
        <li>Ginger-garlic paste: 2 tbsp</li>
        <li>Nihari masala: 3-4 tbsp</li>
        <li>Whole spices: bay leaves, cinnamon, cloves, cardamom</li>
        <li>Ghee or oil: ½ cup</li>
        <li>Lemon wedges: for serving</li>
        <li>Fresh coriander and ginger slices: for garnish</li>
        <li>Salt: to taste</li>
        <li>Water: enough to cover the meat</li>
      </ul>

      <h2 style={{ color: '#c0392b' }}>Steps</h2>
      <ol style={{ lineHeight: '1.6' }}>
        <li>Heat ghee or oil in a large pot. Add whole spices (bay leaves, cinnamon, cloves, cardamom) and fry until aromatic.</li>
        <li>Add sliced onions and cook until golden brown.</li>
        <li>Add ginger-garlic paste and cook for a few minutes, then add the meat and brown it.</li>
        <li>Sprinkle nihari masala over the meat and add salt. Mix well and cook until the oil separates.</li>
        <li>Add enough water to cover the meat, bring to a boil, then reduce heat and cover the pot. Let it simmer for 3-4 hours until the meat is tender.</li>
        <li>In a separate bowl, mix wheat flour with water to form a paste. Gradually add this paste to the simmering nihari while stirring to thicken the gravy.</li>
        <li>Let it cook for another 15-20 minutes until the gravy reaches the desired consistency.</li>
        <li>Garnish with fresh coriander, ginger slices, and lemon wedges. Serve hot with naan.</li>
      </ol>
    </div>
  );
};

export default NihariRecipe;

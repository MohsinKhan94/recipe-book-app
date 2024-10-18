import Image from "next/image";
import haleem from '@/app/assets/haleem.jpg';

const HaleemRecipe = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#e67e22', textAlign: 'center', fontSize: '3rem', marginBottom: '20px' }}>HALEEM RECIPE</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Image 
          src={haleem} 
          alt="Haleem Image" 
          width={700} 
          height={550} 
          style={{ borderRadius: '10px' }}
        />
      </div>
      
      <h2 style={{ color: '#c0392b' }}>Ingredients</h2>
      <ul style={{ lineHeight: '1.6' }}>
        <li>Boneless beef or chicken: ½ kg</li>
        <li>Wheat: 1 cup (soaked overnight)</li>
        <li>Lentils (chana dal, moong dal, masoor dal): ½ cup mixed</li>
        <li>Onions: 2 large (sliced)</li>
        <li>Ginger-garlic paste: 2 tbsp</li>
        <li>Yogurt: ½ cup</li>
        <li>Green chilies: 3-4 (slit)</li>
        <li>Haleem masala: 3 tbsp</li>
        <li>Fried onions: 1 cup (for garnishing)</li>
        <li>Fresh coriander & mint leaves: handful</li>
        <li>Oil or ghee: ½ cup</li>
        <li>Salt: to taste</li>
        <li>Lemon wedges: for serving</li>
      </ul>

      <h2 style={{ color: '#c0392b' }}>Steps</h2>
      <ol style={{ lineHeight: '1.6' }}>
        <li>Cook wheat: Boil soaked wheat in water until soft. Blend slightly to get a thick consistency and set aside.</li>
        <li>Cook meat: In a separate pot, heat oil, fry onions until golden, add ginger-garlic paste, haleem masala, and meat. Cook until meat is tender. Add yogurt and continue cooking until oil separates.</li>
        <li>Add lentils: Add soaked lentils to the meat mixture and cook until soft.</li>
        <li>Combine: Mix the cooked wheat into the meat and lentil mixture. Add water as needed to get a smooth consistency. Let it simmer on low heat.</li>
        <li>Blend: Use a hand blender to mash the haleem until it has a smooth texture.</li>
        <li>Garnishing: Serve the haleem hot, garnished with fried onions, fresh coriander, mint leaves, and lemon wedges.</li>
        <li>Enjoy: Serve with naan or chapati.</li>
      </ol>
    </div>
  );
};

export default HaleemRecipe;

import Image from "next/image";
import biryani from '@/app/assets/biryani.jpg';

const BiryaniRecipe = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#e67e22', textAlign: 'center', fontSize: '3rem', marginBottom: '20px' }}>BIRYANI RECIPE</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Image 
          src={biryani} 
          alt="Biryani Image" 
          width={700}  // Medium width (you can adjust this)
          height={450} // Adjust height accordingly
          style={{ borderRadius: '10px' }}
        />
      </div>
      
      <h2 style={{ color: '#c0392b' }}>Ingredients</h2>
      <ul style={{ lineHeight: '1.6' }}>
        <li>Chicken: 1 kg (cut into pieces)</li>
        <li>Basmati rice: ½ kg (soaked for 30 minutes)</li>
        <li>Onions: 3 medium (sliced)</li>
        <li>Tomatoes: 2 medium (chopped)</li>
        <li>Yogurt: 1 cup</li>
        <li>Green chilies: 4-5 (slit)</li>
        <li>Potatoes: 3 (cut into halves)</li>
        <li>Ginger-garlic paste: 2 tbsp</li>
        <li>Biryani masala: 3 tbsp</li>
        <li>Fresh coriander & mint leaves: handful</li>
        <li>Whole spices: bay leaves, cinnamon, cloves, cardamom</li>
        <li>Oil or ghee: ½ cup</li>
        <li>Saffron or yellow food color: dissolved in milk</li>
        <li>Salt: to taste</li>
        <li>Water: for boiling rice</li>
      </ul>

      <h2 style={{ color: '#c0392b' }}>Steps</h2>
      <ol style={{ lineHeight: '1.6' }}>
        <li>Fry onions: Heat oil in a large pot, fry sliced onions until golden brown, then remove and set aside.</li>
        <li>Cook chicken: In the same oil, add whole spices, then add chicken, ginger-garlic paste, biryani masala, tomatoes, yogurt, and green chilies. Cook until the chicken is done and oil separates.</li>
        <li>Boil potatoes: Boil the potatoes in salted water until half-cooked, then add to the chicken gravy and simmer for a few minutes.</li>
        <li>Boil rice: In another pot, boil water with salt. Add soaked rice and cook until 70% done. Drain and set aside.</li>
        <li>Layering: In the chicken pot, layer the rice over the chicken mixture. Sprinkle fried onions, fresh coriander, mint leaves, and saffron or food color dissolved in milk over the top.</li>
        <li>Steam: Cover the pot with a tight lid and cook on low heat (dum) for 20-25 minutes until the rice is fully cooked.</li>
        <li>Serve: Gently mix the rice and chicken before serving. Enjoy with raita and salad.</li>
      </ol>
    </div>
  );
};

export default BiryaniRecipe;

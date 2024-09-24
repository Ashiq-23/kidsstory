import bg1 from './images/kocbanner.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import Picframe from './picframe';

function Kochi() {
    const imgStyle = {
        width: '100%', // make the image full width
        height: 'auto', // maintain the aspect ratio
        objectFit: 'cover', // cover the container if needed
        borderRadius: '10px', // add rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // apply a subtle shadow
    };

    return (
        <>
            <h1>Welcome to Kochi!</h1>
            <br />
            <img src={bg1} alt='kochi' style={imgStyle} />
            <br />
            <p>Kochi, nestled on the Malabar Coast of India, is a captivating blend of history, culture, and natural beauty. Here are some fascinating facts about this enchanting city:</p>
            <p>1. Queen of the Arabian Sea: Kochi’s strategic location along ancient trade routes made it a bustling port city. Its harbor, bordered by the Laccadive Sea, has witnessed centuries of maritime activity</p>
            <p>2. Colonial Legacy: Stroll through the streets of Kochi, and you’ll encounter remnants of its colonial past. Portuguese churches, Dutch mansions, and British-era architecture stand side by side, telling tales of bygone eras</p>
            <p>3. Small Lagoon, Big Heart: The name “Kochi” itself is derived from the Malayalam word “Kochu Azhi,” meaning “small lagoon.” But don’t let the size fool you—Kochi’s warmth and hospitality are boundless.</p>
            <p>4. Cultural Kaleidoscope: Immerse yourself in Kochi’s rich cultural tapestry. Visit the iconic Chinese fishing nets at Fort Kochi, explore the spice markets, and attend a Kathakali dance performance—the vibrant soul of Kerala.</p>
            <p>5. Spices and Silk: Kochi’s historical significance lies in its spice trade. The aroma of cardamom, pepper, and cloves still lingers in its bustling markets. And don’t miss the opportunity to shop for exquisite silk sarees!</p>
            <p>Remember, Kochi isn’t just a place; it’s an emotion—a blend of old-world charm and modern vibrancy. Come, explore, and let Kochi weave its magic around you!🌴🌟✨</p>
            
        </>
    );
}

export default Kochi;

import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './AboutPage.css'; 

function Aboutpage() {
    const nav = useNavigate();

    return (
        <>
            <div className="about-page-container" style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="text-center"> About VistaVoyages </h1> 
                <p className="text-center" style={{ fontSize: '1.2rem' }}>
                    Welcome to VistaVoyages—the gateway to unforgettable travel experiences!🌟
                </p>
                <br />
                <h2 className="text-center">Our Story</h2>
                <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    At VistaVoyages, we believe that travel isn’t just about reaching a destination; it’s about the journey—the moments, the people, and the stories that unfold along the way. Our passion lies in curating exceptional travel adventures that leave you with memories to cherish for a lifetime.
                </p>
                <br />
                <h2 className="text-center">What Sets Us Apart</h2>
                <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    <strong>1. Local Insights:</strong> We’re not just tour operators; we’re storytellers. Our team of passionate locals knows every hidden gem, every tucked-away café, and every panoramic viewpoint. We’ll take you beyond the tourist brochures and introduce you to the heart and soul of each destination.
                </p>
                <br />
                <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    <strong>2. Tailored Experiences:</strong> No two travelers are alike, and neither should their journeys be. Whether you’re a thrill-seeker, a culture enthusiast, or a relaxation aficionado, we customize every itinerary to match your preferences. Your dream vacation starts with us listening to your desires.
                </p>
                <br />
                <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    <strong>3. Sustainable Travel:</strong> We believe in responsible tourism. Our commitment to sustainability means that we tread lightly on the planet, support local communities, and promote eco-friendly practices. When you travel with VistaVoyages, you’re making a positive impact.
                </p>
                <br />
                <h2 className="text-center">Our Promise</h2>
                <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    When you choose VistaVoyages, you’re not just booking a trip; you’re embarking on an adventure. We promise:
                </p>
                <ul style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    <li><strong>Unforgettable Moments:</strong> From sunrise at ancient temples to sunset on pristine beaches, we create moments that stay etched in your heart.</li>
                    <li><strong>Impeccable Service:</strong> Our dedicated team ensures seamless logistics, personalized attention, and 24/7 support throughout your journey.</li>
                    <li><strong>Authentic Encounters:</strong> Meet the artisans, taste the regional delicacies, and dance to local rhythms. Our tours immerse you in authentic experiences.</li>
                </ul>
                <br />
                <h2 className="text-center">Join Us on the Journey</h2>
                <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Whether you’re a solo traveler, a couple seeking romance, or a family making memories, VistaVoyages invites you to explore the world with wide-eyed wonder. Let’s create your next adventure together!
                    <br />
                    🌎 Explore. Connect. Discover. 🌎
                </p>
                <div className="d-flex justify-content-center mt-4">
                    <Button variant="danger" onClick={() => nav("/")}>Back</Button>
                </div>
            </div>
        </>
    );
}

export default Aboutpage;

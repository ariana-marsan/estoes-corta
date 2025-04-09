
import mati from './images/matias.jpeg';

export function AboutPage() {
    return(
        <main>
            <h1 className='about-title'>ABOUT US</h1>
            <div className="grid">
            <div className="who">
                <h1>Who we are</h1>
                <p>We are a team of dedicated professionals committed to providing the best service possible. Our mission is to deliver high-quality products and services that exceed our customers' expectations. We value integrity, transparency, and accountability in all our interactions.</p>
            </div>
            <div className="how">
                <h1>How we do it</h1>
                <p>We use the latest technology and techniques to ensure that our services are top-notch. We believe in continuous improvement and are always looking for ways to enhance our skills and knowledge.</p>
            </div>
            <div className="why">
                <h1>Why we do it</h1>
                <p>We believe in making a difference in the world and providing value to our customers.</p>
            </div>
            <div className="img">
                <img src={mati} className='imagen-mati'></img>
            </div>
            <div className="thanks">
                <h1>Thank you for choosing us!</h1>
                <p>We are committed to building long-lasting relationships with our customers and partners.</p>
            </div>
            </div>
        </main>
    )
}
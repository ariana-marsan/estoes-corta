
import mati from './matias.jpeg';

export function AboutPage() {
    return(
        <main>
            <div className="grid">
            <div className="who">
                <h1>About Us</h1>
                <p>We are a team of passionate individuals dedicated to providing the best service possible.</p>
                <p>Our mission is to make your life easier and more enjoyable.</p>
                <p>Thank you for choosing us!</p>
            </div>
            <div className="about">
                <h1>About Us</h1>
                <p>We are a team of passionate individuals dedicated to providing the best service possible.</p>
                <p>Our mission is to make your life easier and more enjoyable.</p>
                <p>Thank you for choosing us!</p>
            </div>
            <div className="why">
                <h1>About Us</h1>
                <p>We are a team of passionate individuals dedicated to providing the best service possible.</p>
                <p>Our mission is to make your life easier and more enjoyable.</p>
                <p>Thank you for choosing us!</p>
            </div>
            <div className="img">
                <img src={mati} className='imagen-mati'></img>
            </div>
            <div className="where">
                <h1>About Us</h1>
                <p>We are a team of passionate individuals dedicated to providing the best service possible.</p>
                <p>Our mission is to make your life easier and more enjoyable.</p>
                <p>Thank you for choosing us!</p>
            </div>
            </div>
        </main>
    )
}
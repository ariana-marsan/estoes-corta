
import { Header } from './Header.jsx';
import { AboutPage } from './AboutPage.jsx';
import './App.css';
import { Footer } from './Footer.jsx';

function App() {
  return (
    <>
    <div className="first-line">
                <div className="bienvenidos">
                <a className="menu"><i class="fa-solid fa-bars"></i></a>
                <h2>Bienvenidos a...</h2>
                </div>
                <div className="social-media">
                <a>Instagram</a>
                <a>Facebook</a>
                <a>Twitter</a>
                <a>LinkedIn</a>
                </div>
            </div>
    <Header />
    <AboutPage />
    <Footer />
    </>
  );
}

export default App;

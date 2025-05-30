
import { Header } from './Header.jsx';
import { AboutPage } from './AboutPage.jsx';
import './App.css';
import { Footer } from './Footer.jsx';
import { Clients } from './Clients.jsx';
import { Methods } from './Methods.jsx';
import DropdownMenu from './DropdownMenu.jsx';


function App() {


  return (
    <>
            <div id='home'></div>
    <div className="first-line">
                <div className="bienvenidos">
                <a className="menu" href='#'><i className={"fa-solid fa-bars "} ></i>
                <DropdownMenu />
                </a>
                <h2>Bienvenidos a...</h2>
                </div>
                <div className="social-media">
                <a href='https://www.instagram.com/estoescorta/'>Instagram</a>
                <a>Facebook</a>
                <a>TikTok</a>
                </div>
            </div>
    <Header />
    <AboutPage />
    <div id='clients-link'></div>
    <Clients />
    <div id='methods-link'></div>
    <Methods />
    <Footer />
    </>
  );
}

export default App;

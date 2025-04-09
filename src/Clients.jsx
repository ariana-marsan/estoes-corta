
import asturiano from './images/asturiano.jpeg';
import beat from './images/beat.jpeg';
import calzados from './images/calzados.jpeg';

export function Clients() {
    return (
        <div className="clients">
            <p>They already <b className='trusted'>trusted</b> on us to boost their social media presence</p>
            <div className="clients-logos">
                <img className='logo' src={ asturiano } alt="Logo 1" />
                <img className='logo' src={ beat } alt="Logo 2" />
                <img className='logo' src={ calzados } alt="Logo 3" />
            </div>
        </div>
    )
}
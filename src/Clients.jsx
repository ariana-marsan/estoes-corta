
import asturiano from './images/asturiano.jpeg';
import beat from './images/beat.jpeg';
import calzados from './images/calzados.jpeg';

export function Clients() {
    return (
        <div className="clients">
            <p>Ellos ya <b className='trusted'>confiaron</b> en nosotros para expandir su presencia en redes</p>
            <div className="clients-logos">

            <a href='https://www.instagram.com/asturianovoley/' target='_blank' rel='noreferrer'><img className='logo' src={ asturiano } alt="Logo 1" /> </a>

            <a href='https://www.instagram.com/beat.loft/' target='_blank' rel='noreferrer'><img className='logo' src={ beat } alt="Logo 2" /> </a>
            
                <a href='https://www.instagram.com/calzados_anakin/' target='_blank' rel='noreferrer'><img className='logo' src={ calzados } alt="Logo 3" /></a>
            </div>
        </div>
    )
}
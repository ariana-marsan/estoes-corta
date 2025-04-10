
import mati from './images/matias.jpeg';

export function AboutPage() {
    return(
        <main>
            <h1 className='about-title'>SOBRE NOSOTROS</h1>
            <div className="grid">
            <div className="who">
                <h1>Quienes somos</h1>
                <p>Somos un equipo de profesionales dedicados y comprometidos a brindar el mejor servicio posible. Nuestra misión es ofrecer productos y servicios de alta calidad que superen las expectativas de nuestros clientes. Valoramos la integridad, la transparencia y la responsabilidad en todas nuestras interacciones.</p>
            </div>
            <div className="how">
                <h1>Cómo lo hacemos</h1>
                <p>
                Utilizamos la tecnología y las técnicas más avanzadas para garantizar la excelencia en nuestros servicios. Creemos en la mejora continua y siempre buscamos maneras de perfeccionar nuestras habilidades y conocimientos.</p>
            </div>
            <div className="why">
                <h1>Porqué lo hacemos</h1>
                <p>Creemos en hacer una diferencia en el mundo y brindar valor a nuestros clientes.</p>
            </div>
            <div className="img">
                <img src={mati} className='imagen-mati'></img>
            </div>
            <div className="thanks">
                <h1>¡Gracias por elegirnos!</h1>
                <p>Estamos comprometidos a construir relaciones duraderas con nuestros clientes y socios.</p>
            </div>
            </div>
        </main>
    )
}
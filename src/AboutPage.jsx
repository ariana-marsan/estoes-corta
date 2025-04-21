
import matiynacho from './images/matiasynacho.jpeg';

export function AboutPage() {
    return(
        <main className='about'>
            <h1 className='about-title'>SOBRE NOSOTROS</h1>
            <div className="grid">
            <div className="who">
                <h1>Quienes somos</h1>
                <p>Somos una agencia de marketing digital en Argentina, creada por dos amigos inquietos y apasionados por emprender, aprender y crecer. Nuestra misión es ayudar a las marcas a comunicar con mayor claridad, estilo y propósito. Lo hacemos a través de contenido estratégico, diseño minimalista y una mirada cercana. En un mundo lleno de ruido, apostamos por el valor de lo simple.</p>
            </div>
            <div className="how">
                <h1>Cómo lo hacemos</h1>
                <p>
                Antes de crear, escuchamos. Analizamos la identidad de tu marca, sus fortalezas, desafíos y objetivos. Con esa base, diseñamos un plan estratégico a medida, con contenido creativo, diseño simple y acciones concretas. Nada al azar. Todo con intención. </p>
            </div>
            <div className="why">
                <h1>Porqué lo hacemos</h1>
                <p>Nos inspira la idea de que una marca no necesita exagerar para destacar. Apostamos a un estilo claro y auténtico que conecta. Lo que nos mueve es ayudar a otras personas a crecer, mostrar su valor y dejar una huella con lo que realmente es imprescindible. </p>
            </div>
            <div className="img">
                <img src={matiynacho} alt='matias y nacho (fundadores)' className='imagen-mati'></img>
            </div>
            <div className="thanks">
                <h1>Gracias por confiar</h1>
                <p>Ponemos el corazón en cada proyecto y cuidamos tu marca como propia. Juntos, vamos a crear algo claro, sólido y con propósito.</p>
            </div>
            </div>
        </main>
    )
}


function DropdownMenu() {
  return (
        <div className="dropdown">
            <h4 className="menu-title">Menu</h4>
            <div className="dropdown-content">
            <a href="#home">Inicio</a>
            <a href="#about-link">Sobre Nosotros</a>
            <a href="#clients-link">Clientes</a>
            <a href="#methods-link">Metodos</a>
            <a href="mailto:estoescorta@gmail.com">Contactanos</a>
            </div>
        </div>
  );
}
export default DropdownMenu;
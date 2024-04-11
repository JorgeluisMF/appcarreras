import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
            <Link
                className="navbar-brand"
                to="/principal"
            >
                Inicio
            </Link>
            
            {/* Botón de hamburguesa para dispositivos móviles */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse">
          <div className="navbar-nav ml-auto">
                <NavLink 
                    className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}` } 
                    to="/graphic"
                >
                    Diseño Grafico
                </NavLink>

                <NavLink 
                    className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}` } 
                    to="/fotografia"
                >
                    Fotografia
                </NavLink>

                <NavLink 
                    className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}` } 
                    to="/events"
                >
                    Producción de eventos
                </NavLink>

                <NavLink 
                    className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}` } 
                    to="/moda"
                >
                    Diseño de modas
                </NavLink>

                <NavLink 
                    className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}` } 
                    to="/interior"
                >
                    Diseño de interiores
                </NavLink>

                <NavLink 
                    className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}` } 
                    to="/furniture"
                >
                    Industria del mueble
                </NavLink>
            
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

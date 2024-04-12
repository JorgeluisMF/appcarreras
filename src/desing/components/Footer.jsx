

export const Footer = () => {
  return (
    <>
        <div className="footer">

            <div className="row accordion-button">
                <div className="col text-center mb-5">
                    <img src="/src/assets/logo.svg.svg" className="img-footer" alt="itsc-logo" />
                    <h5>Instituto Tecnico Superior Comunitario</h5>
                    <p>Carretera Mella KM. 14 Esquina, Francisco Del Rosario Sánchez, San Luis</p>
                    <p>Santo Domingo Este</p>
                    <p>Tel.: (809)-475-4872</p>
                    <a href="info@itsc.edu.do" className="link-footer">info@itsc.edu.do</a>
                    <p>©{new Date().getFullYear()} Todos los derechos reservados</p>
                </div>
            </div>
        </div>
    </>
  )
}

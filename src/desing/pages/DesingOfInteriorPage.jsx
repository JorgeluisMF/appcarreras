import { NavBar } from "../../Ui/components/NavBar"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"


export const DesingOfInteriorPage = () => {
  return (
    <>
    
        <Header/>

        <NavBar/>

        <div className="container mt-3 pb-5" >
          <div className="row align-content-between">
            <div className="col-4">
              <img src="/src/assets/DI1.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
            <div className="col-4">
              <img src="/src/assets/DI2.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
            <div className="col-4">
              <img src="/src/assets/DI3.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <h4>Técnico Superior en Diseño de Interiores</h4>
              <p>
                El egresado de esta carrera es un profesional que estará capacitado para: acondicionar los espacios interiores, integrando la capacitación y especialidad en diseño de mobiliario, ambientación, iluminación, jardines, escaparate y diseño textil.
              </p>
              <p>
                El diseño de interiores es una profesión que requiere de una formación específica y capacitación formal; es el arte y la ciencia de entender el comportamiento de los seres humanos para crear y optimizar espacios funcionales, seguros, universales y sostenibles desde su correcta distribución hasta su ejecución.
              </p>
            </div>
            <div className="col-6">
              <h4>¿Qué debe saber un diseñador de interiores?</h4>
              <ul>
                <li>Saber escuchar al cliente</li>
                <li>Comunicarte de manera efectiva y eficaz</li>
                <li>Habilidad de negociación. </li>
                <li>Resolución de problemas.</li>
                <li>Conocimientos de contabilidad.</li>
                <li>Experto en diseño asistido por computadora.</li>
                <li>Servicio al cliente. </li>
              </ul>
            </div>
            <div className="col-6">
              
            </div>
              
            </div>
        </div>

        <Footer/>
    
    </>
  )
}

import { NavBar } from "../../Ui/components/NavBar"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"


export const FurnitureIndustryPage = () => {
  return (
    <>
    
        <Header/>

        <NavBar/>

        <div className="container mt-3 pb-5" >
          <div className="row align-content-between">
            <div className="col-4">
              <img src="/src/assets/IM1.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
            <div className="col-4">
              <img src="/src/assets/IM2.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
            <div className="col-4">
              <img src="/src/assets/IM3.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <h4>Técnico Superior en Industria del Mueble</h4>
              <p>
                El egresado de esta carrera es un profesional que estará capacitado para: organizar, gestionar y controlar la producción en industrias de carpintería y mueble, además de programar, preparar y supervisar los recursos y trabajos necesarios para la transformación de la madera, el corcho y la fabricación e instalación de carpintería y mueble.
              </p>
            </div>
            <div className="col-6">
              <h4>¿Que te ofrece la carrera de Industria del Mueble?</h4>
              <p>
                La carrera de Técnico en Diseño y Fabricación de Muebles de Madera ofrece las competencias profesionales que permiten al estudiante, diseñar, fabricar, armar y ensambla muebles de madera de acuerdo a las necesidades del cliente realiza también mantenimiento a maquinaria y equipo para la fabricación de muebles de madera ...
              </p>
            </div>
              
            </div>
        </div>

        <Footer/>

    </>
  )
}

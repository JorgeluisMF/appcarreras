import { NavBar } from "../../Ui/components/NavBar"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"


export const ProducctionOfEventPage = () => {
  return (
    <>
    
        <Header/>

        <NavBar/>

        <div className="container mt-3 pb-5" >
          <div className="row align-content-between">
            <div className="col-4">
              <img src="/src/assets/PE1.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
            <div className="col-4">
              <img src="/src/assets/PE2.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
            <div className="col-4">
              <img src="/src/assets/IM3.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <h4>Técnico Superior en Producción de Eventos</h4>
              <p>
                El egresado de esta carrera es un profesional que estará capacitado para: administrar y producir eventos y espectáculos, dirigir, coordinar y supervisar las operaciones técnicas de los equipos de producción y formular y ejecutar proyectos de producción de eventos y espectáculos.
              </p>
            </div>
            <div className="col-6">
              <h4>¿Por que estudiar Produccion de eventos?</h4>
              <p>
                La producción de eventos es un servicio que permite crear vínculos sólidos con los clientes, reforzar las estrategias comerciales y el posicionamiento de una empresa.
              </p>
            </div>
              
            </div>
        </div>

        <Footer/>
    
    </>
  )
}

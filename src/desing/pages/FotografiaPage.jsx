import { NavBar } from "../../Ui/components/NavBar"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"


export const FotografiaPage = () => {
  return (
    <>
    
        <Header/>

        <NavBar/>

        <div className="container mt-3 pb-5" >
          <div className="row align-content-between">
            <div className="col-4">
              <img src="/assets/fotografia1.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
            <div className="col-4">
              <img src="/assets/fotografia2.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
            <div className="col-4">
              <img src="/assets/fotografia3.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <h4>Técnico Superior en Fotografía</h4>
              <p>
                El egresado de esta carrera es un profesional que estará capacitado para: proporcionar una información que permite expresarse en el lenguaje fotográfico, desarrollar las funciones técnicas, expresivas y operativas de la fotografía, conocer los instrumentos y los medios materiales.
              </p>
            </div>
            <div className="col-6">
              <h4>¿Por que estudiar forografia?</h4>
              <p>
                Estudiar fotografía puede ser apasionante, ya que es una carrera que te puede inspirar y llevar a lugares bonitos. También te permite reflejar la realidad de nuestra sociedad. Incluso, mostrar eventos especiales.
              </p>
            </div>
              
            </div>
        </div>

        <Footer/>
    
    </>
  )
}

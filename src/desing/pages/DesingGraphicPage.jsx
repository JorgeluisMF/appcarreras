import { NavBar } from "../../Ui/components/NavBar"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import 'animate.css'


export const DesingGraphicPage = () => {
  return (
    <>
    
        <Header/>

        <NavBar/>

        <div className="container mt-3 pb-5" >
          <div className="row align-content-between">
            <div className="col-4">
              <img src="/src/assets/grafico1.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
            <div className="col-4">
              <img src="/src/assets/grafico2.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
            <div className="col-4">
              <img src="/src/assets/grafico3.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <h4>¿Cuáles son las ramas del diseño grafico?</h4>
              <p>Ramas de Diseño Gráfico: ¿Cuáles son y cómo puedes decidir ...
                  Las ramas principales del diseño gráfico son el diseño publicitario, el diseño editorial, el diseño de maquetación y composición, el diseño tipográfico, el diseño multimedia y el diseño de marca/producto o servicio.
              </p>
            </div>
            <div className="col-6">
              <h4>¿Qué tipo de trabajo es diseño gráfico?</h4>
              <p>Todas sus funciones
                Los diseñadores gráficos son aquellos profesionales que se encargan de transmitir un mensaje o una idea mediante la comunicación visual. Su función principal es crear la imagen y el estilo estético de las empresas, ya que esa es la forma en la que se van a dar a conocer.
              </p>
            </div>
              
            </div>
        </div>

        <Footer/>
    
    </>
  )
}

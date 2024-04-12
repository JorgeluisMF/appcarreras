import { NavBar } from "../../Ui/components/NavBar"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"


export const DesingOfModaPage = () => {
  return (
    <>
    
        <Header/>

        <NavBar/>


        <div className="container mt-3 pb-5" >
          <div className="row align-content-between">
            <div className="col-4">
              <img src="/src/assets/DM1.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
            <div className="col-4">
              <img src="/src/assets/DM2.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
            <div className="col-4">
              <img src="/src/assets/DM3.jpg" className="rounded mx-auto d-block animate__animated animate__bounceIn" alt="DG" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <h4>¿Qué es lo que hace un diseñador de moda?</h4>
              <p>
                Diseñar y confeccionar prendas de alta costura. Se trata del área más exclusiva de diseño de moda y consiste en crear y confeccionar prendas originales para clientes individuales.
              </p>
            </div>
            <div className="col-6">
              <h4>Ventajas</h4>
              <ul>
                <li>Conocerás la historia de la moda.</li>
                <li>Desarrollarás tu propio sentido del estilo. </li>
                <li>Aprenderás a coser y construir prendas.</li>
                <li>Tendrás la posibilidad de ser diseñador y productor de pasarela.</li>
                <li>Presentar y publicitar una marca de moda.</li>
              </ul>
              
            </div>
            <div className="col-6">
              <h4>¿Qué es el diseño de modas?</h4>
              <p>
                El diseño de modas es una forma de arte dedicada a la creación de prendas de vestir y otros accesorios que forman parte del estilo de vida de una persona. Se basa en diferentes culturas y tendencias para diseñar piezas estéticas y funcionales que resulten atractivas para el consumidor.
              </p>
            </div>
              
            </div>
        </div>
        <Footer/>
    
    </>
  )
}

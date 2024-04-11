
import { Link } from "react-router-dom"

export const CardCarreras = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

  return (
    <>
        <div className='container'>
            <div className='row align-content-between  justify-content-center pt-5'>

                <div className="col-4 card card-carreras m-4 " >
                <img className='card-img-top' src="/assets/grafico1.jpg" alt="DG" />
                <div className="card-body text-center">
                    <h5 className="card-title">Diseño Grafico</h5>
                    <br />
                    <Link onClick={scrollToTop} to='/graphic' className="btn btn-primary">ir a la pagina</Link>
                </div>
                </div>

                <div className="col-4 card card-carreras m-4">
                <img className='card-img-top' src="/assets/fotografia2.jpg" alt="DG" />
                <div className="card-body text-center">
                    <h5 className="card-title">Fotografia</h5>
                    <br />
                    <Link onClick={scrollToTop} to='/fotografia' className="btn btn-primary">ir a la pagina</Link>
                </div>
                </div>

                <div className="col-4 card card-carreras m-4">
                <img className='card-img-top' src="/assets/PE2.jpg" alt="DG" />
                <div className="card-body text-center">
                    <h5 className="card-title">Produccion de eventos</h5>
                    <br />
                    <Link onClick={scrollToTop} to='/events' className="btn btn-primary">ir a la pagina</Link>
                </div>
                </div>

                <div className="col-4 card card-carreras m-4">
                <img className='card-img-top' src="/assets/DM1.jpg" alt="DG" />
                <div className="card-body text-center">
                    <h5 className="card-title">Diseño de Modas</h5>
                    <br />
                    <Link onClick={scrollToTop} to='/moda' className="btn btn-primary">ir a la pagina</Link>
                </div>
                </div>

                <div className="col-4 card card-carreras m-4">
                <img className='card-img-top' src="/assets/DI1.jpg" alt="DG" />
                <div className="card-body text-center">
                    <h5 className="card-title">Diseño de Interiores</h5>
                    <br />
                    <Link onClick={scrollToTop} to='/interior' className="btn btn-primary">ir a la pagina</Link>
                </div>
                </div>

                <div className="col-4 card card-carreras m-4">
                <img className='card-img-top' src="/assets/IM3.jpg" alt="DG" />
                <div className="card-body text-center">
                    <h5 className="card-title">Industria del Mueble</h5>
                    <br />
                    <Link onClick={scrollToTop} to='/furniture' className="btn btn-primary">ir a la pagina</Link>
                </div>
                </div>
          </div>
        </div>
    </>
  )
}

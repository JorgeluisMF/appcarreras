import React from 'react'
import { CardCarreras } from './CardCarreras'

export const Body = () => {
  return (
    <>
        <div className="container pt-4">
          <div className="row justify-content-between">
            <div className="col">
              <div className="background-container rounded-2">
                <div className="text-content">
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container pt-4">
          <div className="row align-text-right">
            <div className="col">
              <h2>El Instituto Técnico Superior Comunitario (ITSC)</h2>
              <p> 
              Es una institución pública estatal que otorga título de nivel técnico superior y certificaciones académicas en diferentes áreas comprendidas en una oferta de educación permanente, que inició su labor docente en enero del 2013. Cuenta con una oferta curricular de 27 carreras, distribuidas en de 7 áreas salud, informática, artes, hostelería, construcción, industrial y electromecánica. En los primeros dos periodos académicos matriculó 1850 estudiantes en las diferentes áreas de formación que ofrece.
              El ITSC a través de la dirección de servicios estudiantiles y de orientación académica, ofrece diferentes talleres y cursos para potencializar el talento artístico y la criticidad de sus estudiantes, dentro de los cuales se pueden destacar teatro, oratoria, cine forums, pantomimas, canto y baile. En el ámbito deportivo se ofrecen diversas disciplinas como son softball, baloncesto, voleibol, entre otras. Dentro de las de las distintas escuelas se realizan distintas actividades, a fin de poder poner en contacto a los jóvenes con sus futuras áreas de trabajo y campo laboral, tales como excursiones, montajes de eventos, conciertos, etc.
              </p>
            </div>
          </div>
        </div>

        <div className="container pt-4 pb-5">
          <div className="row align-text-between">
            <div className="col">
              <h2>¿Cuánto dura la carrera de diseño gráfico en el ITSC?</h2>
              <p> <span>Como las carreras duran 2 años y un cuatrimestre en promedio, el total a pagar sería RD$3,500.00 por la carrera completa.</span></p>
              <h2>Que carreras ofrece ITSC?</h2>
              <p> 
                Talleres, Cursos, Diplomados y Certificaciones
                Informática. Artes. Salud.
                Industrial. Electromecánica. Turismo.
                Construcción. Certificaciones. Idiomas.
              </p>
            </div>
            <div className="col">
              <img className="img-principal rounded-3" src="/assets/itsc.png" alt="ITSC" />
            </div>
          </div>
          
          <CardCarreras/>
          
        </div>
    
    </>
    
  )
}

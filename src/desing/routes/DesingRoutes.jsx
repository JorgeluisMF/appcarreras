import { Routes, Route, Navigate } from 'react-router-dom'
import { DesingGraphicPage } from '../pages/DesingGraphicPage'
import { DesingOfInteriorPage } from '../pages/DesingOfInteriorPage'
import { FurnitureIndustryPage } from '../pages/FurnitureIndustryPage'
import { PrincipalPage } from '../pages/PrincipalPage'
import { ProducctionOfEventPage } from '../pages/ProducctionOfEventPage'
import { DesingOfModaPage } from '../pages/DesingOfModaPage'
import { FotografiaPage } from '../pages/FotografiaPage'

export const DesingRoutes = () => {
  return (
    <Routes>

        <Route path='graphic' element={ <DesingGraphicPage/> }/>
        <Route path='interior' element={ <DesingOfInteriorPage/> } />
        <Route path='moda' element={ <DesingOfModaPage/> }/>
        <Route path='fotografia' element={ <FotografiaPage/>}/>
        <Route path='furniture' element={ <FurnitureIndustryPage/> }/>
        <Route path='principal' element={ <PrincipalPage/> }/>
        <Route path='events' element={ <ProducctionOfEventPage/> }/>

        <Route path='/*' element={ <Navigate to='/principal'/> }/>




        
       
    </Routes>
  )
}

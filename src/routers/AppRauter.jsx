import {Routes, Route, Navigate } from 'react-router-dom'
import { PrincipalPage } from '../desing/pages/PrincipalPage'
import { DesingRoutes } from '../desing/routes/DesingRoutes'


export const AppRauter = () => {
  return (
    <Routes>
        <Route path='principal' element={<PrincipalPage/>}/>

        <Route path='/*' element={ <DesingRoutes/> }/>

    </Routes>
  )
}

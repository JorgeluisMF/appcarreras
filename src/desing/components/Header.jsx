import React from 'react'

export const Header = () => {
  return (
    <>
       
       <div className="container">
            <div className='row justify-content-between pt-3'>
                <div className='col-4'>
                    <a href="https://www.itsc.edu.do/">
                        <img src="/src/assets/logo.svg.svg" className="img-logo" alt="logo" />
                    </a>
                </div>
                <div className='col-4 text-center'>
                    <img src="/src/assets/republica dominicana.png" className='img-escudo pb-3' alt="escudo" />
                    <br />
                    <a href="https://www.itsc.edu.do/" className="link-contacts">Contactos  |</a>
                    <a href="https://www.facebook.com/ITSCRD/?locale=es_LA&_rdc=2&_rdr" className='link-contacts'>
                        <img src="/src/assets/facebook_icon.svg" className='icon' alt="facebook" />
                        |
                    </a>
                    <a href="https://www.instagram.com/itscrd/?hl=es" className='link-contacts'>
                        <img src="/src/assets/instagram_icon.svg" className='icon' alt="instagram" />
                        |
                    </a>
                    <a href="https://twitter.com/itscoficial" className='link-contacts'>
                        <img src="/src/assets/twiter_icon.svg" className='icon' alt="facebook" />
                        |
                    </a>
                    <a href="https://www.youtube.com/channel/UCx5xIE0mGavNfY3dktS_Cog" className='link-contacts'>
                        <img src="/src/assets/youtuve_icon.svg" className='icon' alt="facebook" />
                        |
                    </a>
                
                </div>
            </div>
        </div>

    </>
  )
}

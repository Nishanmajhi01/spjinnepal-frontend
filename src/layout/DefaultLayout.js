import React from 'react'
import { Header } from './partials/Header.comp'
import { Footer } from './partials/Footer.comp'
import {Outlet} from 'react-router-dom'

const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
        <header className='header'> <Header/></header>
        <main className="main mt-5"><Outlet/></main>
        <footer className="footer"> <Footer/></footer>
    </div>
  )
}

export default DefaultLayout

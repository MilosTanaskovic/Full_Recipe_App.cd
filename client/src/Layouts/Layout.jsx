import React from 'react'
import { Footer, Header } from '../components/organisms'

const Layout = ({children}) => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Layout

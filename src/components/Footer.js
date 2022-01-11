import React from 'react'

function Footer() {
const year = new Date().getFullYear()

    return (
        <footer className="footer">
          <span id="year">© {year} - Robin de Zeeuw</span> 
        </footer>
    )
}

export default Footer

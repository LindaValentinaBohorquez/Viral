import React from 'react'

const Footer = () => {
  return (
    <footer className='page-footer'>
        <p>&copy; {new Date().getFullYear()} <span> VIRAL. </span> Hecho con {""}
          <a href='https://www.gatsbyjs.com/'>Gatsby</a>
        </p>
    </footer>
  )
}

export default Footer

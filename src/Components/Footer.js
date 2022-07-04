import React from 'react'

const Footer = () => {

  let footerSytle = {
    position: "relative",
    top: "100vh",
    width:"100%"
  }
  return (
    <footer className= "bg-dark text-light py-2" style={footerSytle}>
      <p className="text-center">
        Copyright &copy; ZainTodoList.com
      </p>
    </footer>
  )
}

export default Footer

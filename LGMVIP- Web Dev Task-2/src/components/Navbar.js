import React from 'react'

export default function Navbar(props) {
  const clicked = () => {
    props.onSetIsClicked(1);
}
    return (
        
      <nav className="navbar navbar-lg-expand">
        
        <p className="brand p-3 mx-3 text-white display-6">Brand Name</p>
        <div className="nav-item p-3 mx-3"><button className="btn btn-success shadow-lg" onClick={clicked}>Get Data</button></div>
       
      </nav>
        
    )
}

import React from "react";
import  './Header.css'
const Header = ()=>{
    return(
        <header>
        <div className="container ">
        <div className="col-md-6 mt-5 text-sm-center">
            <h1 className="text-sm-center">Good food choices are good investments.</h1> 
            <p  className="text-sm-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
            <button variant="outline-success" className="p-2 fs-3 text-sm-center ">Order Now</button>
            </div>
            <div className="col-md-6">

            </div>
        </div>
        </header>
    )
}
export default Header
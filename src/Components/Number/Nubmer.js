import React, { Fragment } from "react";
import  './Nubmer.css'
import image from './../images/bg2.jpg'

const Number = ()=>{
    return(
        <Fragment>
            <div className="number ">
            <div className="row mt-0 mx-0  ">
                <div className="col-md-3 col-sm-12 text-center">
                    <h4>1287+</h4>
                    <p>SAVINGS</p>
                </div>
                <div className="col-md-3 col-sm-12 text-center ">
                    <h4>5786+</h4>
                    <p>Photos</p>
                </div>
                <div className="col-md-3 col-sm-12 text-center">
                    <h4>1440+</h4>
                    <p>ROCKETS</p>
                </div>
                <div className="col-md-3 col-sm-12 text-center" >
                    <h4>7110+</h4>
                    <p>Global</p>
                </div>
            </div>
            </div>
        
<div className="pride">
        <div className="container">
    <div className="row">
            <div className="col-md-5"> 
        <img src={image} alt='img'/>
            </div>
            <div className="col-md-6 mx-4 ">
<h1 className="mt-0 text-sm-center ">We pride ourselves on making real food from the best ingredients.</h1>
<p className="text-sm-center col-md-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
    <button>Learn More</button>    
        </div>
        </div>
        </div>
        </div>
        </Fragment>
    )
}
export default Number
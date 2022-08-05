import React, { Fragment} from "react";
import  './Inger.css'
import image1 from './../images/1.jpg'
import image2 from './../images/2.jpg'
import image3 from './../images/3.jpg'
import image4 from './../images/quinoa-mushrooms-lettuce-red-cabbage-spinach-cucumbers-tomatoes-bowl-buddha-dark-top-view.jpg'
import Explore from "../Explore/Explore";


const Inger = ()=>{
const data = Explore.map((item)=>{

    return(
<section className='col-md-4' key={item.id}>
            <img src={item.img1} alt='kh'/>
            <h5 className='fs-1'>{item.title}</h5>
            <span >{item.time}</span>
            <h6 className='fs-2'>{item.price}</h6>
            <button className="bg-success mt-3 bt mb-2 ">Order Now</button>
    </section>
    )
})
    return(

        <Fragment>
        <div className="inger mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="mx-4 mb-0 text-sm-center col-md-12">We make everything by hand with the best possible ingredients.</h1>
                    <p className="txt me-2 text-sm-center col-md-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul className=" ">
                        <li className="list1"> Etiam sed dolor ac diam volutpat. </li>
                        <li>Erat volutpat aliquet imperdiet. </li>
                        <li> purus a odio finibus bibendum. </li>
                    </ul>
                    <button className="mx-5 text-sm-center mb-5" >Learn More</button> 
                </div>
                <div className="col-md-6">
        <img className="w-100 col-md-6 mb-3 col-sm-12" src={image1} alt='img1'/>
        <img className="w-100 col-md-6 col-sm-12" src={image2} alt='img1'/>
        <img className="w-100 col-md-6 col-sm-12" src={image3} alt='img1'/>
        <img className="w-100 col-md-6 col-sm-12"  src={image4} alt='img1'/>
    </div>
    </div>
    </div>
    <section className="section3 mt-3 text-sm-center col-sm-12">
    <div className=" col-md-6">
        <h1 className="col-sm-12 col-md-12" >When a man's stomach is full it makes nodifference whether he is rich or poor.</h1>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odiofinibus bibendum in sit amet leo. Mauris feugiat erat tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odiofinibus bibendum in sit amet leo. Mauris feugiat erat tellus</p>

    <div className="col-md-6 ">
    </div>
    </div>
    </section>
<section className='blogs'>
    <div className="container">
            <h1 className='text-center'>Explore Our Foods</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        </div>
        <div className="row">
            {data}
        </div>
</section>
    </Fragment>
    )
}
export default Inger
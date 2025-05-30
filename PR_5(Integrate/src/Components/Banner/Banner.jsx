
import React from 'react'
import "./Banner.css"



const Banner = () => {  
    return (
        <div className='pb-5'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 mt-3'>
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className='first-banner position-relative'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='banner-content mb-4'>
                                                    <span className='detail'>100%</span> &nbsp; organic vagetable
                                                    <h2 className='mb-4 mt-4'>The best Way to <br></br>Stuff Your Wallet</h2>
                                                    <p className='b-con mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Amet reiciendis
                                                        beatae consequuntur.</p>
                                                    <button className="banner-btn mb-4">Shop Now</button>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>




                                <div className="carousel-item">
                                    <div className='second-banner  position-relative'>

                                        <div className='container'>
                                            <div className='row'>

                                                <div className='banner-content mb-4'>
                                                    <span className='detail-1'>100%</span>&nbsp; organic fruits
                                                    <h2 className='mb-4 mt-4'>Explore Fresh &<br></br> juicy Fruits</h2>
                                                    <p className='b-con-1 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Amet reiciendis
                                                        beatae consequuntur.</p>
                                                    <button className="banner-btn mb-4">Shop Now</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Banner

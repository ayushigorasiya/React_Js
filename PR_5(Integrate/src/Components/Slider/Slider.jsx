
import React from 'react'
import "./Slider.css"

const Slider = () => {
    return (
        <div>
            <section className="part">
                <div className="container">
                    <div className="row ">

                        <div className="col-12 py-10 col-sm-12 col-sm-6 col-lg-6 col-xl-4">
                            <div className="slider">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/3.jpg" />

                                <div className="col-5 wsm-6col-sm-6 wlg-5 product-content">
                                    <span>
                                        Healthy
                                    </span>
                                    <h5>
                                        bakery product
                                    </h5>
                                    <span className='off'>30%</span> off
                                    <br /><br />
                                    <a href="#" className="shop">Shop now
                                        <i className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-10 col-sm-12 col-sm-6 col-lg-6 col-xl-4">
                            <div className="slider">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/1.jpg" />

                                <div className="col-5 wsm-6col-sm-6 wlg-5 product-content">
                                    <span>
                                        fresh
                                    </span>
                                    <h5>
                                        snakes & sweet
                                    </h5>
                                    <span className='off'>20%</span> off
                                    <br /><br />
                                    <a href="#" className="shop">Shop now
                                        <i className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-10col-sm-12 col-sm-6 col-lg-6 col-xl-4">
                            <div className="slider">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product-banner/2.jpg" />

                                <div className="col-5 col-sm-6 col-sm-6 wlg-5 product-content">
                                    <span>
                                        fresh
                                    </span>
                                    <h5>
                                        organic fruits
                                    </h5>
                                    <span className='off'>50%</span> off
                                    <br /><br />
                                    <a href="#" className="shop">Shop now
                                        <i className="fa-solid fa-angle-right"></i></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>

    )
}

export default Slider
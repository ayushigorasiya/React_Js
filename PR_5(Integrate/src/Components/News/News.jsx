import React from 'react'
import "./News.css"
const News = () => {
    return (
        <div>
            <section className="section-blog padding-b-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-30" data-aos="fade-up" align="center" data-aos-duration="2000">
                                <div className="cr-banner">
                                    <h2>Latest News</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cr-blog-slider swiper-container">
                                <div className="swiper-wrapper d-flex m-3">
                                   <div className="swiper-slide m-3" data-aos="fade-up" data-aos-duration="2000">
                                        <div className="cr-blog">
                                            <div className="cr-blog-content">
                                                <span><code>By Admin</code> | <a href="blog-left-sidebar.html">Snacks</a></span>
                                                <h5>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                                <a className="read" href="#">Read More</a>
                                            </div>
                                            <div className="cr-blog-image">
                                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/2.jpg" alt="blog-2" />
                                                <div className="cr-blog-date">
                                                    <span>
                                                        10
                                                        <code>oct</code>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="swiper-slide m-3" data-aos="fade-up" data-aos-duration="2000">
                                        <div className="cr-blog">
                                            <div className="cr-blog-content">
                                                <span><code>By Admin</code> | <a href="blog-left-sidebar.html">Snacks</a></span>
                                                <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                                <a className="read" href="#">Read More</a>
                                            </div>
                                            <div className="cr-blog-image">
                                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/1.jpg" alt="blog-2" />
                                                <div className="cr-blog-date">
                                                    <span>
                                                        12
                                                        <code>oct</code>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div className="swiper-slide m-3" data-aos="fade-up" data-aos-duration="2000">
                                        <div className="cr-blog">
                                            <div className="cr-blog-content">
                                                <span><code>By Admin</code> | <a
                                                    href="blog-left-sidebar.html">Vegetable</a></span>
                                                <h5>Condimentum Nam enim bestMorbi odio sodales.</h5>
                                                <a className="read" href="#">Read More</a>
                                            </div>
                                            <div className="cr-blog-image">
                                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/3.jpg" alt="blog-3" />
                                                <div className="cr-blog-date">
                                                    <span>
                                                        22
                                                        <code>jan</code>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default News
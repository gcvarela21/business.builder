import React from "react";


function Home() {
    return (
        <>

            <div className="container carousel-cont" style={{height: 400, overflow: "hidden"}}>
                <div style={{ width: 500, height: 1000, overflow: "hidden", marginLeft: "auto", marginRight: "auto" }} id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20210129_120321_084.jpg?width=450&height=278&fit=bounds&crop=fill" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20210204_201223_779.jpg?width=450&height=278&fit=bounds&crop=fill" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/20210130_134909.jpg?width=450&height=278&fit=bounds&crop=fill" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20200206_112851_547.jpg?width=450&height=278&fit=bounds&crop=fill" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20200206_112851_547.jpg?width=450&height=278&fit=bounds&crop=fill" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20200206_112851_547.jpg?width=450&height=278&fit=bounds&crop=fill" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20200206_112851_547.jpg?width=450&height=278&fit=bounds&crop=fill" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20190716_113759.jpg?width=1920&height=1080&fit=bounds" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Home;
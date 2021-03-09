import React from "react";


function Home() {
    return (
        <>

            <div className="container">
                <div style={{ width: 500, height: 1000, overflow: "hidden", marginLeft: "auto", marginRight: "auto" }} id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20210129_120321_084.jpg?width=450&height=278&fit=bounds&crop=fill" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20210204_201223_779.jpg?width=450&height=278&fit=bounds&crop=fill" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/20210130_134909.jpg?width=450&height=278&fit=bounds&crop=fill" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20200206_112851_547.jpg?width=450&height=278&fit=bounds&crop=fill" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20200206_112851_547.jpg?width=450&height=278&fit=bounds&crop=fill" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20200206_112851_547.jpg?width=450&height=278&fit=bounds&crop=fill" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20200206_112851_547.jpg?width=450&height=278&fit=bounds&crop=fill" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Home;


{/* <div className="container">
<div className="row">
    <div className="col-sm">
        <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20200926_124223_307.jpg?width=1920&height=1080&fit=bounds" class="img-thumbnail" alt="..."></img>
    </div>
    <div className="col-sm">
        <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/20201014_103120_HDR.jpg?width=1920&height=1080&fit=bounds" class="img-thumbnail" alt="..."></img>
    </div>
    <div className="col-sm">
        <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20200206_112851_547.jpg?width=1920&height=1080&fit=bounds" class="img-thumbnail" alt="..."></img>
    </div>
    <div className="col-sm">
        <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/IMG_20201119_105550_754.jpg?width=1920&height=1080&fit=bounds" class="img-thumbnail" alt="..."></img>
    </div>
</div>
</div> */}
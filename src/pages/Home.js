import Footer from "../components/Footer"
import logoDark from "../assets/Beesocial_logo_Dark.png"
import download_1 from "../assets/download_1.png"
import { Link } from "react-router-dom"
const Home = () => {
    return (
      <div className="home_bg_divide"data-aos="fade-up" data-aos-delay="1000">
        <div className="d-flex justify-content-center align-items-center" data-aos="fade-up" 
          style={{backgroundColor: "white", height: "50vh", borderBottomLeftRadius: "50%"}}>
          <div className="">
            <div className="" data-aos="fade-up" data-aos-delay="1200">
              <img className="image-fluid" src={logoDark} alt="BeeSocial" style={{ height: '25vh'}} />
            </div>
          </div>
        </div>
        <div className="row m-0" style={{backgroundColor: "#E9AB17", height: "50vh", borderTopRightRadius: "50%"}}>
          <div className="col-md-6 mx-auto d-flex justify-content-center align-items-center">
            <div className="">
              <span className="fs-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            </div>
          </div>
        </div>
        <div className="py-md-5 py-3">
          <div align="center" className="col-10 mx-auto display-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>
        <div align="center" className="py-5">
          <div className="display-2 text-center" data-aos="fade-up">
            About Us
          </div>
          <div align="center" data-aos="fade-up" data-aos-delay="200">
            <hr className="my-2 border-0 bg-none col-8" style={{backgroundColor: "#E9AB17", padding: 2}} />
          </div>
          <div className="row container-fluid py-5">
            <div className="col-md-4 py-2 col-10 m-auto fs-4" data-aos="fade-up" data-aos-delay="400">
              <img align="center" className="image-fluid" src={logoDark} alt="BeeSocial" style={{ height: '25vh'}} />
            </div>
            <div className="col-md-4 py-2 col-10 m-auto fs-4" data-aos="fade-up" data-aos-delay="400">
              <p className="" style={{textAlign:"justify"}}>
                Download the app to get regular updates and many moreDownload the app to get regular updates and many more
                Download the app to get regular updates and many moreDownload the app to get regular updates and many more
            </p>
            </div>
          </div>
        </div>
        <div align="center" className="py-md-5 py-3">
          <div className="display-2 text-center" data-aos="fade-up">
            Our Events
          </div>
          <div align="center" data-aos="fade-up" data-aos-delay="200">
            <hr className="my-2 border-0 bg-none col-8" style={{backgroundColor: "#E9AB17", padding: 2}} />
          </div>
          <div className="container-fluid py-md-5 py-3 row d-flex justify-content-around align-items-center">
            <div className="card col-md-3 m-md-0 m-3 col-10 border-0 shadow-lg" data-aos="fade-up" data-aos-delay="100" style={{
              borderRadius: '8%'
            }} >
              <img src={logoDark} className="card-img-top p-5" alt="..."/>
              <div align="center" className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="m-0">Date & time</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div align="center" className="py-2">
                    <Link to="/our-events/dummy-event" className="text-decoration-none">
                      <button className="btn btn-outline-dark rounded-pill col-10">
                        Read more...
                        </button>                  
                    </Link>
                </div>
              </div>
            </div>
            <div className="card col-md-3 m-md-0 m-3 col-10 border-0 shadow-lg" data-aos="fade-up" data-aos-delay="200" style={{
              borderRadius: '8%'
            }} >
              <img src={logoDark} className="card-img-top p-5" alt="..."/>
              <div align="center" className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="m-0">Date & time</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div align="center" className="py-2">
                    <Link to="/our-events/dummy-event" className="text-decoration-none">
                      <button className="btn btn-outline-dark rounded-pill col-10">
                        Read more...
                        </button>                  
                    </Link>               
                </div>
              </div>
            </div>
            <div className="card col-md-3 m-md-0 m-3 col-10 border-0 shadow-lg" data-aos="fade-up" data-aos-delay="300" style={{
              borderRadius: '8%'
            }} >
              <img src={logoDark} className="card-img-top p-5" alt="..."/>
              <div align="center" className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="m-0">Date & time</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div align="center" className="py-2">
                    <Link to="/our-events/dummy-event" className="text-decoration-none">
                      <button className="btn btn-outline-dark rounded-pill col-10">
                        Read more...
                        </button>                  
                    </Link>               
                </div>
              </div>
            </div>
          </div>
          <div align="right" className="py-2 px-5">
            <Link to="/our-events/" className="text-decoration-none">
              <button className="btn btn-outline-dark rounded-pill col-md-3 col-6">
                View more...
                </button>                  
            </Link>               
          </div>
        </div>
        <div align="center" className="py-md-5 py-3">
          <div className="display-2 text-center" data-aos="fade-up">
            Updates on other events
          </div>
          <div align="center" data-aos="fade-up" data-aos-delay="200">
            <hr className="my-2 border-0 bg-none col-8" style={{backgroundColor: "#E9AB17", padding: 2}} />
          </div>
          <div className="container-fluid py-md-5 py-3 row d-flex justify-content-around align-items-center">
            <div className="card col-md-3 m-md-0 m-3 col-10 border-0 shadow-lg" data-aos="fade-up" data-aos-delay="100" style={{
              borderRadius: '8%'
            }} >
              <img src={logoDark} className="card-img-top p-5" alt="..."/>
              <div align="center" className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="m-0">Date & time</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div align="center" className="py-2">
                    <Link to="/other-events/dummy-event" className="text-decoration-none">
                      <button className="btn btn-outline-dark rounded-pill col-10">
                        Read more...
                        </button>                  
                    </Link>
                </div>
              </div>
            </div>
            <div className="card col-md-3 m-md-0 m-3 col-10 border-0 shadow-lg" data-aos="fade-up" data-aos-delay="200" style={{
              borderRadius: '8%'
            }} >
              <img src={logoDark} className="card-img-top p-5" alt="..."/>
              <div align="center" className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="m-0">Date & time</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div align="center" className="py-2">
                    <Link to="/other-events/dummy-event" className="text-decoration-none">
                      <button className="btn btn-outline-dark rounded-pill col-10">
                        Read more...
                        </button>                  
                    </Link>               
                </div>
              </div>
            </div>
            <div className="card col-md-3 m-md-0 m-3 col-10 border-0 shadow-lg" data-aos="fade-up" data-aos-delay="300" style={{
              borderRadius: '8%'
            }} >
              <img src={logoDark} className="card-img-top p-5" alt="..."/>
              <div align="center" className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="m-0">Date & time</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div align="center" className="py-2">
                    <Link to="/other-events/dummy-event" className="text-decoration-none">
                      <button className="btn btn-outline-dark rounded-pill col-10">
                        Read more...
                        </button>                  
                    </Link>               
                </div>
              </div>
            </div>
          </div>
          <div align="right" className="py-2 px-5">
            <Link to="/other-events/" className="text-decoration-none">
              <button className="btn btn-outline-dark rounded-pill col-md-3 col-6">
                View more...
                </button>                  
            </Link>               
          </div>
        </div>
        <div align="center" className="py-md-5 py-3">
          <div className="display-2 text-center" data-aos="fade-up">
            Our Tie-ups
          </div>
          <div align="center" data-aos="fade-up" data-aos-delay="200">
            <hr className="my-2 border-0 bg-none col-8" style={{backgroundColor: "#E9AB17", padding: 2}} />
          </div>
          <div className="container-fluid py-md-5 py-3 row d-flex justify-content-around align-items-center">
            <div className="card col-md-3 m-md-0 m-3 col-10 border-0" data-aos="fade-up" data-aos-delay="100" style={{
              borderRadius: '8%'
            }} >
              <img src={logoDark} className="card-img-top p-5" alt="..."/>
              <div align="center" className="card-body">
                <h4 className="card-title">Card title</h4>
              </div>
            </div>
            <div className="card col-md-3 m-md-0 m-3 col-10 border-0" data-aos="fade-up" data-aos-delay="200" style={{
              borderRadius: '8%'
            }} >
              <img src={logoDark} className="card-img-top p-5" alt="..."/>
              <div align="center" className="card-body">
                <h4 className="card-title">Card title</h4>
              </div>
            </div>
            <div className="card col-md-3 m-md-0 m-3 col-10 border-0" data-aos="fade-up" data-aos-delay="300" style={{
              borderRadius: '8%'
            }} >
              <img src={logoDark} className="card-img-top p-5" alt="..."/>
              <div align="center" className="card-body">
                <h4 className="card-title">Card title</h4>
              </div>
            </div>
          </div>
        </div>

      <div>
          <div className="display-2 text-center" data-aos="fade-up">
            Feedbacks
          </div>
          <div align="center" data-aos="fade-up" data-aos-delay="200">
            <hr className="my-2 border-0 bg-none col-8" style={{backgroundColor: "#E9AB17", padding: 2}} />
          </div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-aos="fade-up">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 col-md-8 col-10 container">
                  <p className="text-center fs-1"><b>Lorem</b></p>
                  <p className="text-center fs-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 col-md-8 col-10 container">
                  <p className="text-center fs-1"><b>Lorem</b></p>
                  <p className="text-center fs-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 col-md-8 col-10 container">
                  <p className="text-center fs-1"><b>Lorem</b></p>
                  <p className="text-center fs-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 col-md-8 col-10 container">
                  <p className="text-center fs-1"><b>Lorem</b></p>
                  <p className="text-center fs-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 col-md-8 col-10 container">
                  <p className="text-center fs-1"><b>Lorem</b></p>
                  <p className="text-center fs-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
        <div>
        <div className="mx-auto d-flex justify-content-center align-items-center">
          <div className="p-md-5 p-3 row container-fluid d-flex justify-content-center align-items-center">
            <div className="col-md-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="700">
                <img className="img-fluid img_ani p-2" src={download_1} alt="BeeSocial Download App"/>
              </div>
            </div>
            <div className="col-md-4 py-5" data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-center">
                Download the app to get regular updates and many more</h4>
            </div>
          </div>
        </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    )
}

export default Home
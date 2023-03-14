import Footer from "../components/Footer"
import logoDark from "../assets/Beesocial_logo_Dark.png"
import { Link } from "react-router-dom"
const OurEvents = () => {
    return (
        <div className="py-5">
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
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default OurEvents
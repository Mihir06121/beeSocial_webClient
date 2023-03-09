import Footer from "../components/Footer"
import logoDark from "../assets/Beesocial_logo_Dark.png"
import download_1 from "../assets/download_1.png"
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


{/* <div class="container-fluid tech-slideshow">
  <div class="mover-1">
    <div className="display-1">TEST</div>
  </div>
  <div class="mover-1"></div>
</div> */}


        {/* <div className=" py-5">
          <div className="position-relative marquee-container d-none d-sm-block">
            <div className="marquee d-flex justify-content-around">
              <div>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="marquee marquee2 d-flex justify-content-around">
              <div>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="py-5">
          <div className="display-2 text-center" data-aos="fade-up">
            About Us
          </div>
          <div align="center" data-aos="fade-up" data-aos-delay="200">
            <hr className="my-2 border-0 bg-none col-8" style={{backgroundColor: "#E9AB17", padding: 2}} />
          </div>
          <div className="col-md-6 py-2 col-10 mx-auto fs-4" data-aos="fade-up" data-aos-delay="400">
            <p className="" style={{textAlign:"justify"}}>
          Download the app to get regular updates and many moreDownload the app to get regular updates and many more
          Download the app to get regular updates and many moreDownload the app to get regular updates and many more
          </p>
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
import React, { useState, useEffect } from 'react';
import '../App.css';
import carousel1 from '../Assets/images/carousel-1.jpg';
import carousel2 from '../Assets/images/carousel-2.jpg';
import about from '../Assets/images/about.jpg';
import haircut from '../Assets/images/haircut.png';
import beardTrim from '../Assets/images/beard-trim.png';
import mansShave from '../Assets/images/mans-shave.png';
import hairDyeing from '../Assets/images/hair-dyeing.png';
import mustache from '../Assets/images/mustache.png';
import stacking from '../Assets/images/stacking.png';
import priceImage from '../Assets/images/price.jpg';
import team1Image from '../Assets/images/team-1.jpg';
import team2Image from '../Assets/images/team-2.jpg';
import team3Image from '../Assets/images/team-3.jpg';
import team4Image from '../Assets/images/team-4.jpg';
import openImage from '../Assets/images/open.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';




function Home() {
  const [isZoomed, setIsZoomed] = useState(false);
  let gotoTop = (secID) => {
    const element = document.getElementById(secID);
    const navbarElement = document.querySelector('.navbar>.container-fluid');

    if (navbarElement) {
      var navHeight = navbarElement.clientHeight;
    }
    console.log(element)
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPosition - navHeight, behavior: 'smooth' });
    }
  }
  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  gotoTop();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className='overflow-hidden'>
      {/* nav sec */}
      <section className='nav-school'>
        <nav class="navbar navbar-expand-lg" id=''>
          <div class="container-fluid">
            <a class="navbar-brand fs-1" style={{ color: '#EB1616' }} href="#"><i className="fa fa-cut me-3" />Haircut</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon bg-light rounded-2"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-4  p-4 mb-lg-0 text-center ">

                <li class="nav-item">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('home')} >Home</a>
                </li>

                <li class="nav-item ">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('about')}>About</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('services')}>Services</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('barber')}>Our Barber</a>
                </li>

                <li class="nav-item ">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('contact')}>Contact</a>
                </li>
                <li class="nav-item px-2">
                  <a href="" className="btn btn-primary rounded-2 py-2 px-lg-4 d-none d-lg-block">Appointment<i className="fa fa-arrow-right ms-3"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <div className='buy-now d-flex justify-content-center align-items-center rounded-2'>
        <a href="https://axesstechnology.in/contact" target='_blank'>
          <button className='buy-now-bt'>BuyNow</button></a>
      </div>

      {/* carousel sec */}
      <div className="container-fluid p-0 mb-5 wow fadeIn" id='home' data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide pt-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={carousel1} alt="Image" />
              <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                <div className="mx-sm-5 px-5 " style={{ maxWidth: '900px' }}>
                  <h1 className="display-2 pt-5 text-white text-uppercase mb-4 animated slideInDown">We Will Keep You An Awesome Look</h1>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown"><i className="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</h4>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown"><i className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={carousel2} alt="Image" />
              <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                <div className="mx-sm-5 px-5" style={{ maxWidth: '900px' }}>
                  <h1 className="display-2 pt-5 text-white text-uppercase mb-4 animated slideInDown">Luxury Haircut at Affordable Price</h1>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown"><i className="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</h4>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown"><i className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</h4>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* about sec */}
      <div className="container-xxl nav-bg " id='about'>
        <div className="container">
          <div className="row g-5 py-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="d-flex flex-column">
                <img className="img-fluid w-75 align-self-end" src={about} alt="" />
                <div className="w-50 bg-dark p-5" style={{ marginTop: '-25%' }}>
                  <h2 className="text-uppercase header1  mb-3">25 Years</h2>
                  <h2 className="text-uppercase text-light mb-0 ">Expert</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <p className="d-inline-block bg-dark header1  py-1 px-4">About Us</p>
              <h1 className="text-uppercase text-light mb-4">More Than Just A Haircut. Learn More About Us!</h1>
              <p className='about-p'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <p className="mb-4 about-p">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
              <div className="row g-4">
                <div className="col-md-6">
                  <h3 className="text-uppercase text-light mb-3">Since 1990</h3>
                  <p className="mb-0 about-p">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                </div>
                <div className="col-md-6">
                  <h3 className="text-uppercase text-light mb-3">1000+ clients</h3>
                  <p className="mb-0 about-p">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* services sec */}
      <div className="container-xxl py-5 nav-bg" id='services'>
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <p className="d-inline-block bg-dark header1 py-1 px-4">Services</p>
            <h1 className="text-uppercase text-light">What We Provide</h1>
          </div>
          <div className="row g-4">
            <ServiceItem
              image={haircut}
              title="Haircut"
              description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam."
              price="From $15"
              delay="0.1s"
            />
            <ServiceItem
              image={beardTrim}
              title="Beard Trim"
              description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam."
              price="From $15"
              delay="0.3s"
            />
            <ServiceItem
              image={mansShave}
              title="Mans Shave"
              description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam."
              price="From $15"
              delay="0.5s"
            />
            <ServiceItem
              image={hairDyeing}
              title="Hair Dyeing"
              description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam."
              price="From $15"
              delay="0.1s"
            />
            <ServiceItem
              image={mustache}
              title="Mustache"
              description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam."
              price="From $15"
              delay="0.3s"
            />
            <ServiceItem
              image={stacking}
              title="Stacking"
              description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam."
              price="From $15"
              delay="0.5s"
            />
          </div>
        </div>
      </div>

      <div className="container-xxl py-5 nav-bg">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6" data-aos="zoom-out">
              <div className="bg-dark h-100 d-flex flex-column justify-content-center p-5">
                <p className="d-inline-flex nav-bg header1 py-1 px-4 me-auto">Price & Plan</p>
                <h1 className="text-uppercase mb-4 text-light">Check Out Our Barber Services And Prices</h1>
                <div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0 text-light">Haircut</h6>
                    <span className="text-uppercase header1">$29.00</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0 text-light">Beard Trim</h6>
                    <span className="text-uppercase header1">$35.00</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0 text-light">Mans Shave</h6>
                    <span className="text-uppercase header1">$23.00</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0 text-light">Hair Dyeing</h6>
                    <span className="text-uppercase header1">$19.00</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0 text-light">Mustache</h6>
                    <span className="text-uppercase header1">$15.00</span>
                  </div>
                  <div className="d-flex justify-content-between py-2">
                    <h6 className="text-uppercase mb-0 text-light">Stacking</h6>
                    <span className="text-uppercase header1">$39.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="zoom-out">
              <div className="h-100">
                <img className="img-fluid h-100" src={priceImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our barber sec */}
      <div className="container-xxl py-5 nav-bg" id='barber'>
        <div className="container py-3">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
            <p className="d-inline-block bg-dark header1 py-1 px-4">Our Barber</p>
            <h1 className="text-uppercase text-light">Meet Our Barber</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="zoom-in">
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src={team1Image} alt="" />
                  <div className="team-social">
                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="bg-dark text-center p-4">
                  <h5 className="text-uppercase text-light">Barber Name</h5>
                  <span className="header1">Designation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="zoom-in">
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src={team2Image} alt="" />
                  <div className="team-social">
                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="bg-dark text-center p-4">
                  <h5 className="text-uppercase text-light">Barber Name</h5>
                  <span className="header1">Designation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="zoom-in">
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src={team3Image} alt="" />
                  <div className="team-social">
                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="bg-dark text-center p-4">
                  <h5 className="text-uppercase text-light">Barber Name</h5>
                  <span className="header1">Designation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="zoom-in">
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src={team4Image} alt="" />
                  <div className="team-social">
                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="bg-dark text-center p-4">
                  <h5 className="text-uppercase text-light">Barber Name</h5>
                  <span className="header1">Designation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5 nav-bg">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6" data-aos="zoom-out">
              <div className="h-100">
                <img className="img-fluid h-100" src={openImage} alt="" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="zoom-out">
              <div className="bg-dark h-100 d-flex flex-column justify-content-center p-5">
                <p className="d-inline-flex nav-bg header1 py-1 px-4 me-auto">Working Hours</p>
                <h1 className="text-uppercase mb-4 text-light">Professional Barbers Are Waiting For You</h1>
                <div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0 text-light">Monday</h6>
                    <span className="text-uppercase about-p">09 AM - 09 PM</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0 text-light">Tuesday</h6>
                    <span className="text-uppercase about-p">09 AM - 09 PM</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0 text-light">Wednesday</h6>
                    <span className="text-uppercase about-p">09 AM - 09 PM</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0 text-light">Thursday</h6>
                    <span className="text-uppercase about-p">09 AM - 09 PM</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <h6 className="text-uppercase mb-0 text-light">Friday</h6>
                    <span className="text-uppercase about-p">09 AM - 09 PM</span>
                  </div>
                  <div className="d-flex justify-content-between py-2">
                    <h6 className="text-uppercase mb-0 text-light">Sat / Sun</h6>
                    <span className="text-uppercase header1">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer sec */}
      <div className='' id='contact'>
        <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <h4 className="text-uppercase mb-4">Get In Touch</h4>
                <div className="d-flex align-items-center mb-2">
                  <div className="btn-square nav-bg flex-shrink-0 me-3">
                    <span className="fa fa-map-marker-alt header1"></span>
                  </div>
                  <span>123 Street, New York, USA</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="btn-square nav-bg flex-shrink-0 me-3">
                    <span className="fa fa-phone-alt header1"></span>
                  </div>
                  <span>+012 345 67890</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="btn-square nav-bg flex-shrink-0 me-3">
                    <span className="fa fa-envelope-open header1"></span>
                  </div>
                  <span>info@example.com</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <h4 className="text-uppercase mb-4">Quick Links</h4>
                <a className="btn btn-link" href="#">About Us</a>
                <a className="btn btn-link" href="#">Contact Us</a>
                <a className="btn btn-link" href="#">Our Services</a>
                <a className="btn btn-link" href="#">Terms & Condition</a>
                <a className="btn btn-link" href="#">Support</a>
              </div>
              <div className="col-lg-4 col-md-6">
                <h4 className="text-uppercase mb-4">Newsletter</h4>
                <div className="position-relative mb-4">
                  <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                  <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
                <div className="d-flex pt-1 m-n1">
                  <a className="btn btn-lg-square btn-dark text-primary m-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-lg-square btn-dark text-primary m-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-lg-square btn-dark text-primary m-1" href="#"><i className="fab fa-youtube"></i></a>
                  <a className="btn btn-lg-square btn-dark text-primary m-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <p className='text-center pt-3'>Haircut Saloon, All Right Reserved.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function ServiceItem({ image, title, description, price, delay }) {
  return (
    <div className="col-lg-4 col-md-6" data-aos="zoom-in">
      <div className="service-item position-relative overflow-hidden bg-dark d-flex h-100 p-5 ps-0">
        <div className="nav-bg d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
          <img className="img-fluid" src={image} alt={title} />
        </div>
        <div className="ps-4">
          <h3 className="text-uppercase mb-3 text-light">{title}</h3>
          <p className='about-p'>{description}</p>
          <span className="text-uppercase header1">{price}</span>
        </div>
        <a className="btn btn-square" href=""><i className="fa fa-plus text-primary pt-2"></i></a>
      </div>
    </div>
  );
}

export default Home;

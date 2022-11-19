import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import BenimLogo from '../../images/benim_car_logo.png'
import AddBanner from '../../images/add_banner.jpg'
import AddBanner2 from '../../images/add_banner2.jpg'
import CarImage from '../../images/car-image1.jpg'
import RunningIcon from '../../images/running_icon.svg'
import MeterIcon from '../../images/meter_icon.svg'
import PumpIcon from '../../images/pump_icon.svg'
import TestMonialImages from '../../images/testimonial_image.jpg'
import BannerIcon from '../../images/banner_icon1.png'
import BannerIcon2 from '../../images/banner_icon2.png'
import BannerIcon3 from '../../images/banner_icon3.png'
import Arror from '../../images/arrow.svg'
import './home.css'
import 'material-icons/iconfont/material-icons.css';

function Home() {

    const [showCSS,setShowCSS] = useState(false)
    const [showCSSYear,setShowCSSYear] = useState(false)
    const [showCSSBrand,setShowCSSBrand] = useState(false)
    const [showCSSVariant,setShowCSSVariant] = useState(false)


    const showBrand = () => {
        setShowCSS(!showCSS);
        let elem = document.getElementById('brandList');
        ReactDOM.findDOMNode(elem).style.display= showCSS ? "inline" : "none";
    }
    const showYear = () => {
        setShowCSSYear(!showCSSYear)
        // console.log(showCSS,"-=-=-",showCSSYear)
        let elem = document.getElementById('yearList');
        ReactDOM.findDOMNode(elem).style.display= showCSSYear ? "inline" : "none";
    }

    const selectBrand = () => {
        setShowCSSBrand(!showCSSBrand)
        console.log(showCSSBrand,'--=-==-=')
        let elem = document.getElementById('ModelList');
        ReactDOM.findDOMNode(elem).style.display= showCSSBrand ? "inline" : "none";
    }

    const selectVariant = () => {
        setShowCSSVariant(!showCSSVariant)
        let elem = document.getElementById('varientlList');
        ReactDOM.findDOMNode(elem).style.display= showCSSVariant ? "inline" : "none";
    

    return (
        <div className="home-page">
            <header className="site-header">
                <div className="container">
                    <nav className="navbar">
                        <a href="#" className="navbar-brand"><img src={BenimLogo} alt="" /></a>
                        <ul className="navbar-nav">
                            <li className="nav-item contact-number"><span>Call us</span>878-9671-4455</li>
                            <li className="nav-item"><a href="javascript:void(0)"><span>Have a car</span>Sell a car</a></li>
                            <li className="nav-item"><a href="javascript:void(0)"><span>Looking for a car</span>Buy a car now</a></li>
                        </ul>
                        <div className="navbar-right">
                            <a href="javascript:void(0)" className="nav-search">
                                <span className="material-icons">
                                    search
                                </span>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="material-icons">
                                menu
                            </span>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
            <main className="site-main">
                <div className="hm-banner-container">
                    <div className="container">
                        <div className="hm-banner">
                            <h1>Sell your car @ best price instantly with 3 steps</h1>
                            <div className="sellCar-formContent">
                                <div className="sellCar-slides" id="sellHomeSlides">
                                    <div className="sellCar-slide">
                                        <h4 id="sellSlideHdr">Car Manufatured inforamtion</h4>
                                        <div className="sellCar-form-option-content">
                                            <div className="sellCar-form-option sell-slide-1" id="sellSlide1">
                                                <div className="input-block">
                                                    <div className="input-labels" onClick={() => showBrand()} >
                                                        <label >Barnd</label>
                                                        <p className="result-text" id="brandResultText">Select Brand</p>
                                                    </div>
                                                    <div class="cust-dropdown-popover"  id="brandList">
                                                        <ul className="cust-dropdown-menu">
                                                            <li >Volkswagen</li>
                                                            <li >Toyata</li>
                                                            <li >Skoda</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="input-block">
                                                    <div className="input-labels" onClick={() => showYear()}>
                                                        <label >Year</label>
                                                        <p className="result-text placeholder" id="yearResultText">Select year</p>
                                                    </div>
                                                    <div className="cust-dropdown-popover" id="yearList">
                                                        <ul className="cust-dropdown-menu">
                                                            <li >2010</li>
                                                            <li >2011</li>
                                                            <li >2012</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="input-block">
                                                    <div className="input-labels" onClick={() => selectBrand()}>
                                                        <label >Model</label>
                                                        <p className="result-text placeholder" id="modelResultText">Select Brand</p>
                                                    </div>
                                                    <div className="cust-dropdown-popover" id="ModelList">
                                                        <ul className="cust-dropdown-menu">
                                                            <li >Model 1</li>
                                                            <li >Model 2</li>
                                                            <li >Model 3</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="input-block">
                                                    <div className="input-labels" onClick={() => selectVariant()}>
                                                        <label >Varient</label>
                                                        <p className="result-text placeholder" id="varientResultText">Select Brand
                                                        </p>
                                                    </div>
                                                    <div className="cust-dropdown-popover" id="varientlList">
                                                        <ul className="cust-dropdown-menu">
                                                            <li >Varient 1</li>
                                                            <li >Varient 2</li>
                                                            <li >Varient 3</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sellCar-form-option sell-slide-2" id="sellSlide2">

                                                <div className="input-block">
                                                    <div className="input-labels" >
                                                        <label >Owner</label>
                                                        <p className="result-text placeholder" id="ownerResultText">Select</p>
                                                    </div>
                                                    <div className="cust-dropdown-popover" id="ownerList">
                                                        <ul className="cust-dropdown-menu">
                                                            <li >1st Owner</li>
                                                            <li >2nd Owner</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="input-block">
                                                    <div className="input-labels" >
                                                        <label >KM Driven</label>
                                                        <p className="result-text placeholder" id="drivenResultText">Select </p>
                                                    </div>
                                                    <div className="cust-dropdown-popover" id="drivenlList">
                                                        <ul className="cust-dropdown-menu">
                                                            <li >10,000</li>
                                                            <li >20,000</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="input-block">
                                                    <div className="input-labels">
                                                        <label >Mobile Number</label>
                                                        <input type="text" id="sellMobileNumber" className="input-text" />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="sellCar-form-option sell-slide-3" id="sellSlide3">
                                                <div className="otp-verificatio">
                                                    <p className="otp-message">Enter the otp sent
                                                        to <span className="mobile-number">+91 9898989898</span></p>
                                                    <div className="input-block">
                                                        <input type="password" className="input-text" />
                                                    </div>
                                                    <button className="btn btn-primary btn-submit" >Submit</button>
                                                </div>


                                            </div>

                                            <button className="btn btn-primary btn-arrow"  ><img
                                                src={Arror} alt="" /></button>
                                        </div>
                                        <div className="sell-car-slection-form">
                                            <form action="">
                                                <div id="sellFormGroup1">
                                                    <input type="text" id="brantInputVal" hidden />
                                                    <input type="text" id="yearInputVal" hidden />
                                                    <input type="text" id="modelInputVal" hidden />
                                                    <input type="text" id="varientInputVal" hidden />
                                                </div>
                                                <div id="sellFormGroup2">
                                                    <input type="text" id="ownerInputVal" hidden />
                                                    <input type="text" id="drivenInputVal" hidden />
                                                    <input type="text" id="mobileInputVal" hidden />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <ul className="slides-counts" id="slideDots">
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="banner-whyUs-points">
                                <div className="point"><span className="icon"><img src={BannerIcon} alt="" /></span>
                                    <p><strong>Free Door-Step Inspection</strong>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                        elit, sed do eiusmod tempor </p>
                                </div>
                                <div className="point"><span className="icon"><img src={BannerIcon2} alt="" /></span>
                                    <p><strong>Free Door-Step Inspection</strong>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                        elit, sed do eiusmod tempor </p>
                                </div>
                                <div className="point"><span className="icon"><img src={BannerIcon3} alt="" /></span>
                                    <p><strong>Free Door-Step Inspection</strong>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                        elit, sed do eiusmod tempor </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hm-offers-container">
                    <div className="container">
                        <div className="hm-offers">
                            <div className="hm-offer">
                                <img src={AddBanner} alt="" />
                            </div>
                            <div className="hm-offer">
                                <img src={AddBanner2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hm-car-list-container">
                    <div className="container">
                        <h2 className="section-title">Car you like to buy</h2>
                        <div className="car-list">
                            <div className="car-col">
                                <div className="car-image">
                                    <span className="special-tag">Special</span>
                                    <img className="car" src={CarImage} alt=""/>
                                </div>
                                <div className="car-info">
                                    <p className="car-name">Used 2005 Kia Rio</p>
                                    <div className="price"><span className="regular-price old-price">₹ 2000</span><span
                                        className="offer-price">₹
                                        2000</span></div>
                                    <ul className="car-attributes">
                                        <li><span className="icon"><img src={RunningIcon} alt="" /> </span>
                                            <p>10000 mi</p>
                                        </li>
                                        <li><span className="icon"><img src={MeterIcon} alt=""/> </span>
                                            <p>28</p>
                                        </li>
                                        <li><span className="icon"><img src={PumpIcon} alt="" /> </span>
                                            <p>Petrol</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="car-col">
                                <div className="car-image">
                                    <span className="special-tag">Special</span>
                                    <img className="car" src={CarImage} alt=""/>
                                </div>
                                <div className="car-info">
                                    <p className="car-name">Used 2005 Kia Rio</p>
                                    <div className="price"><span className="regular-price old-price">₹ 2000</span><span
                                        className="offer-price">₹
                                        2000</span></div>
                                    <ul className="car-attributes">
                                        <li><span className="icon"><img src={RunningIcon} alt="" /> </span>
                                            <p>10000 mi</p>
                                        </li>
                                        <li><span className="icon"><img src={MeterIcon} alt="" /> </span>
                                            <p>28</p>
                                        </li>
                                        <li><span className="icon"><img src={PumpIcon} alt=""/> </span>
                                            <p>Petrol</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="car-col">
                                <div className="car-image">
                                    <span className="special-tag">Special</span>
                                    <img className="car" src={CarImage} alt=""/>
                                </div>
                                <div className="car-info">
                                    <p className="car-name">Used 2005 Kia Rio</p>
                                    <div className="price"><span className="regular-price old-price">₹ 2000</span><span
                                        className="offer-price">₹
                                        2000</span></div>
                                    <ul className="car-attributes">
                                        <li><span className="icon"><img src={RunningIcon} alt=""/> </span>
                                            <p>10000 mi</p>
                                        </li>
                                        <li><span className="icon"><img src={MeterIcon} alt=""/> </span>
                                            <p>28</p>
                                        </li>
                                        <li><span className="icon"><img src={PumpIcon} alt=""/> </span>
                                            <p>Petrol</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="car-col">
                                <div className="car-image">
                                    <span className="special-tag">Special</span>
                                    <img className="car" src={CarImage} alt=""/>
                                </div>
                                <div className="car-info">
                                    <p className="car-name">Used 2005 Kia Rio</p>
                                    <div className="price"><span className="regular-price old-price">₹ 2000</span><span
                                        className="offer-price">₹
                                        2000</span></div>
                                    <ul className="car-attributes">
                                        <li><span className="icon"><img src={RunningIcon} alt=""/> </span>
                                            <p>10000 mi</p>
                                        </li>
                                        <li><span className="icon"><img src={MeterIcon} alt=""/> </span>
                                            <p>28</p>
                                        </li>
                                        <li><span className="icon"><img src={PumpIcon} alt=""/> </span>
                                            <p>Petrol</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="faq-container">
                    <div className="container">
                        <h2 className="section-title">FAQs</h2>
                        <div className="faq-list">
                            <div className="faq-content">
                                <h3 className="faq-question">What is the eligibility for selling my car on Benim Cars?<span className="material-icons">
                                    expand_more</span></h3>
                                <p className="faq-answer">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Vestibulum tempor neque ac sodales tristique. Mauris nec rutrum libero. Fusce rhoncus,
                                    leo in posuere fermentum, enim massa hendrerit ex, eu maximus nibh dui quis libero. </p>
                            </div>
                            <div className="faq-content">
                                <h3 className="faq-question">What is the eligibility for selling my car on Benim Cars?</h3>
                                <p className="faq-answer">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Vestibulum tempor neque ac sodales tristique. Mauris nec rutrum libero. Fusce rhoncus,
                                    leo in posuere fermentum, enim massa hendrerit ex, eu maximus nibh dui quis libero. </p>
                            </div>
                            <div className="faq-content">
                                <h3 className="faq-question">What is the eligibility for selling my car on Benim Cars?</h3>
                                <p className="faq-answer">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Vestibulum tempor neque ac sodales tristique. Mauris nec rutrum libero. Fusce rhoncus,
                                    leo in posuere fermentum, enim massa hendrerit ex, eu maximus nibh dui quis libero. </p>
                            </div>
                            <div className="faq-content">
                                <h3 className="faq-question">What is the eligibility for selling my car on Benim Cars? </h3>
                                <p className="faq-answer">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Vestibulum tempor neque ac sodales tristique. Mauris nec rutrum libero. Fusce rhoncus,
                                    leo in posuere fermentum, enim massa hendrerit ex, eu maximus nibh dui quis libero. </p>
                            </div>
                            <div className="faq-content">
                                <h3 className="faq-question">What is the eligibility for selling my car on Benim Cars?</h3>
                                <p className="faq-answer">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Vestibulum tempor neque ac sodales tristique. Mauris nec rutrum libero. Fusce rhoncus,
                                    leo in posuere fermentum, enim massa hendrerit ex, eu maximus nibh dui quis libero. </p>
                            </div>
                            <div className="faq-content">
                                <h3 className="faq-question">What is the eligibility for selling my car on Benim Cars?</h3>
                                <p className="faq-answer">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Vestibulum tempor neque ac sodales tristique. Mauris nec rutrum libero. Fusce rhoncus,
                                    leo in posuere fermentum, enim massa hendrerit ex, eu maximus nibh dui quis libero. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials-container">
                    <div className="container">
                        <h4>What customers are saying about Benim car services.</h4>
                        <div className="testimonials-list">
                            <div className="testimonial">
                                <div className="testimonial-image"><img src={TestMonialImages} alt="" /></div>
                                <p className="name">Gregory M. Kowalski</p>
                                <p className="content">“Besides of being an amazing and easy to use theme… the customer support in a
                                    DREAM for” </p>
                            </div>
                            <div className="testimonial">
                                <div className="testimonial-image"><img src={TestMonialImages} alt="" /></div>
                                <p className="name">Gregory M. Kowalski</p>
                                <p className="content">“Besides of being an amazing and easy to use theme… the customer support in a
                                    DREAM for” </p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="site-footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="footer-about">
                                <img src="images/benim_car_logo.png" alt="" />
                                    <p>Benim Cars offers 100% FREE and instant car valuation and inspection. We at Benim Cars, do
                                        not stop here after providing you a fair value for your car. </p>
                                    <ul className="social-links">
                                        <li><a href="javascript:void(0)"><img src="images/facebook_icon.svg" alt="" /></a></li>
                                        <li><a href="javascript:void(0)"><img src="images/instagram_icon.svg" alt="" /></a></li>
                                        <li><a href="javascript:void(0)"><img src="images/twitter_icon.svg" alt="" /></a></li>
                                    </ul>
                            </div>

                            <div className="footer-right">
                                <ul className="footer-links">
                                    <li><a href="javascript:void(0)">About us</a></li>
                                    <li><a href="javascript:void(0)">Contact us</a></li>
                                    <li><a href="javascript:void(0)">About us</a></li>
                                    <li><a href="javascript:void(0)">Careers</a></li>
                                </ul>
                                <ul className="footer-links">
                                    <li><a href="javascript:void(0)">Terms of service</a></li>
                                    <li><a href="javascript:void(0)">Refund Policy</a></li>
                                    <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                </ul>
                                <div className="footer-address">
                                    <p><span className="material-icons">
                                        place
                                    </span>301, Manish Plaza, SN 16, NIBM Road, Kondhwa Khurd, Pune 411048</p>
                                    <p><span className="material-icons">call</span>+91 846 881 7758</p>
                                    <p><span className="material-icons">mail</span>contact@benimcars.com</p>
                                </div>
                                <div className="footer-brands">
                                    <span><img src="images/suzuki_logo.png" alt="" /></span>
                                    <span><img src="images/hyundai-logo.png" alt="" /></span>
                                    <span><img src="images/honda_logo.png" alt="" /></span>
                                    <span><img src="images/tata_logo.png" alt="" /></span>
                                    <span><img src="images/mahindra_logo.png" alt="" /></span>
                                    <span><img src="images/kia_logo.png" alt="" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
                            );
}
}
export default Home;
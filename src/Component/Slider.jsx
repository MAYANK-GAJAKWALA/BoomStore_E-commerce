import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Container from "react-bootstrap/Container";

// CSS
import "../CSS/Slide.css";

// Images
import Slider_1 from "../Images/slider-1.jpg";
import Slider_2 from "../Images/slider-2.jpg";

function Slider() {
  const options = {
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "fadeOut",
  };

  return (
    <Fragment>
      <Container>
        <div className="slider sliderMargin">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
              <img src={Slider_1} alt="" />

              <div className="Img_1_Txt_1">NEW ARRIVALS</div>
              <div className="Img_1_Txt_2">MEN & FASHION</div>
              <div className="Img_1_Txt_3">BIG SALE</div>
              <div className="Img_1_Txt_4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                <br />
                odio.Praesent libero. Sed cursus ante dapibus dia
              </div>
              <div className="Img_1_Txt_5">
                <p className="PurchaseNowBorder1">PURCHASE NOW</p>
              </div>
            </div>

            <div className="item">
              <img src={Slider_2} alt="" />
              <div className="Img_2_Txt_1">WOMEN'S ACCESSORIES</div>
              <div className="Img_2_Txt_2">NEW JEWELLERY</div>
              <div className="Img_2_Txt_3">25% OFF</div>
              <div className="Img_2_Txt_4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                <br />
                odio.Praesent libero. Sed cursus ante dapibus dia
              </div>
              <div className="Img_2_Txt_5">
                <p className="PurchaseNowBorder2">PURCHASE NOW</p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </Container>
    </Fragment>
  );
}

export default Slider;

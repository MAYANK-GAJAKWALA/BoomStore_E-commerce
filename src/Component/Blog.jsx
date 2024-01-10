import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// CSS
import "../CSS/Blog.css";

// Images
import Blog1 from "../Images/Blog-1.jpg";
import Blog2 from "../Images/Blog-2.jpg";
import Blog3 from "../Images/Blog-3.jpg";
import Blog4 from "../Images/Blog-4.jpg";
import Blog5 from "../Images/Blog-5.jpg";
import HomeBG from "../Images/wgb-home1.jpg";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

// Images
import BrandLogo from "../Images/Brand_Logo.jpg";

function Blog() {
  const options = {
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    animateOut: "fadeOut",
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
    },
  };

  const CenterSlider = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  };

  const LogoSlider = {
    items: 5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    margin: 35,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
    },
  };
  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="product_one_border"></div>
            <div className="ProductListMargin text-center mt-2 mb-3 blogFloat">
              FROM OUR BLOG
            </div>
            <div className="product_two_border "></div>
          </Col>
        </Row>

        <Row>
          <div className="slider">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <div>
                  <img src={Blog1} alt="" />
                  <p className="BlogTitle">SAMPLE BLOG TITLE</p>
                  <p className="BlogDescription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Asperiores magni rerum sapiente, quam nisi nulla qui
                  </p>
                </div>
              </div>

              <div className="item">
                <div>
                  <img src={Blog2} alt="" />
                  <p className="BlogTitle">SAMPLE BLOG TITLE</p>
                  <p className="BlogDescription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Asperiores magni rerum sapiente, quam nisi nulla qui
                  </p>
                </div>
              </div>

              <div className="item">
                <div>
                  <img src={Blog3} alt="" />
                  <p className="BlogTitle">SAMPLE BLOG TITLE</p>
                  <p className="BlogDescription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Asperiores magni rerum sapiente, quam nisi nulla qui
                  </p>
                </div>
              </div>

              <div className="item">
                <div>
                  <img src={Blog4} alt="" />
                  <p className="BlogTitle">SAMPLE BLOG TITLE</p>
                  <p className="BlogDescription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Asperiores magni rerum sapiente, quam nisi nulla qui
                  </p>
                </div>
              </div>

              <div className="item">
                <div>
                  <img src={Blog5} alt="" />
                  <p className="BlogTitle">SAMPLE BLOG TITLE</p>
                  <p className="BlogDescription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Asperiores magni rerum sapiente, quam nisi nulla qui
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </Row>

        <Row>
          <Col lg={12} md={12}>
            <div className="MainDiv">
              <div className="mybgImg">
                <div className="centerBox">
                  <div>
                    <h4 className="CenterBoxTitle">
                      WHAT OUR HAPPY CUSTOMERS SAY
                    </h4>
                    <div className="slider">
                      <OwlCarousel className="owl-theme" {...CenterSlider}>
                        <div className="item">
                          <div>
                            <p className="CenterDivDescription">
                              Lorem ipsum dolor sit amet, consectetur Lorem
                              ipsum dolor sit amet, consectetur adipiscing elit.
                              Integer nec odio. Praesent adipiscing elit.
                              Integer nec odio.
                            </p>
                            <p
                              className="CenterDivDescription"
                              style={{ fontSize: "25px" }}
                            >
                              <FontAwesomeIcon icon={faQuoteRight} />
                            </p>
                            <p className="DiamondGate">DIAMOND GATE</p>
                          </div>
                        </div>

                        <div className="item">
                          <div>
                            <p className="CenterDivDescription">
                              Lorem ipsum dolor sit amet, consectetur Lorem
                              ipsum dolor sit amet, consectetur adipiscing elit.
                              Integer nec odio. Praesent adipiscing elit.
                              Integer nec odio.
                            </p>
                            <p
                              className="CenterDivDescription"
                              style={{ fontSize: "25px" }}
                            >
                              <FontAwesomeIcon icon={faQuoteRight} />
                            </p>
                            <p className="DiamondGate">DIAMOND GATE</p>
                          </div>
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <div className="slider BrandLogoMargin">
            <OwlCarousel className="owl-theme" {...LogoSlider}>
              <div className="item">
                <div className="BrandLogoBorder">
                  <img
                    src={BrandLogo}
                    alt=""
                    className="BrandLogoInnerBorder"
                  />
                </div>
              </div>

              <div className="item">
                <div className="BrandLogoBorder">
                  <img
                    src={BrandLogo}
                    alt=""
                    className="BrandLogoInnerBorder"
                  />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Blog;

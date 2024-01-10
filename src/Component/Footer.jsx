import React from "react";
import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

// CSS
import "../CSS/Footer.css";

// Images
import BoomLogoWhite from "../Images/BoomLogo_white.png";
import Payment from "../Images/payment.png";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <Fragment>
      <div className="FooterMainDiv">
        <Container>
          <Row>
            <Col lg={3}>
              <div>
                <img src={BoomLogoWhite} alt="" className="BoomLogoWhite" />
              </div>

              <div>
                <p className="BoomWhiteText">
                  Welcome to BOOM, one of the best Responsive Prestashop theme
                </p>
              </div>

              <div>
                <span>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="LocationIcon"
                  />
                </span>

                <span className="AddreshWhiteText">
                  Address: Puffin street 12345 Puffinville France
                </span>
              </div>

              <div>
                <span>
                  <FontAwesomeIcon icon={faPhone} className="LocationIcon" />
                </span>

                <span className="AddreshWhiteText">Phone: 0123-456-789</span>
              </div>

              <div>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} className="LocationIcon" />
                </span>

                <span className="AddreshWhiteText">Email: demo@demo.com</span>
              </div>
            </Col>

            <Col lg={3}>
              <div>
                <div>
                  <p className="InformationTitle">INFORMATION</p>
                </div>
                <div>
                  <p className="InformationWhiteText">About Us</p>
                  <p className="InformationTextMargin">Prices drop</p>
                  <p className="InformationTextMargin">New Products</p>
                  <p className="InformationTextMargin">Best sales</p>
                  <p className="InformationTextMargin">Contact Us</p>
                  <p className="InformationTextMargin">Stores</p>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div>
                <div>
                  <p className="InformationTitle">INSTAGRAM</p>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div>
                <div>
                  <p className="InformationTitle">NEWSLETTER</p>
                </div>

                <div>
                  <p className="InformationWhiteText">
                    Stay up to date with our company news, new productsand
                    exclusive offers
                  </p>
                </div>

                <div>
                  <InputGroup className="mb-3 SearchBorder">
                    <Form.Control
                      placeholder="Enter your email..."
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      className="border-0 searchInput "
                    />
                  </InputGroup>
                </div>

                <div>
                  <p className="Subscribe SearchBorder">SUBSCRIBE NOW</p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <div className="PaymentImage">
                <img src={Payment} alt="" className="PaymentAll" />
              </div>
            </Col>

            <Col lg={6} md={12} sm={12} xs={12}>
              <div>
                <p style={{ float: "right", padding: " 80px 0px 30px 0px" }}>
                  <span className="copyRightText">Copyright 2017</span>&nbsp;
                  <span className="copyRightYellowText">
                    Boom Store Co., LTD.
                  </span>
                  &nbsp;
                  <span className="copyRightText">All rights reserved</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default Footer;

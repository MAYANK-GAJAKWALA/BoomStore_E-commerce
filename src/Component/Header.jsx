import React, { Fragment, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

// CSS
import "../CSS/Header.css";
import "animate.css";

// Component (For Loader)
import MenuLoader from "./loader/MenuLoader";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faBars,
  faMagnifyingGlass,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

// Images
import BoomLogo from "../Images/Boom_Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Nav List API //
  const [NavList, setNavList] = useState([]);
  const [loader, setLoader] = useState(false);

  const NavListing = async () => {
    setLoader(true);
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setLoader(false);
      setNavList(response.data);
    } catch (error) {
      setLoader(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    NavListing();
  }, []);
  // Nav List API //

  return (
    <Fragment>
      <div>
        <Navbar className="BgColor">
          <div className="NavText2">
            Welcome to BOOM! Start shopping today with our big deals
          </div>
          <div className="ms-auto rightTextPad">
            <span className="rightText">USD</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="rightText">ENGLISH</span>
          </div>
        </Navbar>

        <Container>
          <Row>
            <Col lg={4} md={4} sm={4}>
              <div style={{ display: "flex" }} className="IconsPadding">
                <div className="IconSection ">
                  <a href="" className="ma">
                    <span className="mmm">
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </a>
                </div>

                <div className="IconSection IconLefPad">
                  <a href="" className="ma">
                    <span className="mmm">
                      <FontAwesomeIcon icon={faGoogle} />
                    </span>
                  </a>
                </div>

                <div className="IconSection IconLefPad">
                  <a href="" className="ma">
                    <span className="mmm">
                      <FontAwesomeIcon icon={faInstagram} />
                    </span>
                  </a>
                </div>

                <div className="IconSection IconLefPad">
                  <a href="" className="ma">
                    <span className="mmm">
                      <FontAwesomeIcon icon={faPinterestP} />
                    </span>
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} sm={4}>
              <div className="BoomLogo">
                <div>
                  <Link to={"/"}>
                    <img src={BoomLogo} alt="Logo" className="LogoWidth" />
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} sm={4}>
              <div style={{ display: "flex" }} className="IconsPadding">
                <div className="IconSection ">
                  <a href="" className="ma">
                    <span className="mmm">
                      <FontAwesomeIcon icon={faBagShopping} />
                    </span>
                  </a>
                </div>

                <div className="IconSection IconRightPad">
                  <a href="" className="ma">
                    <span className="mmm">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                  </a>
                </div>

                <div className="IconSection IconRightPad">
                  <a href="" className="ma">
                    <span className="mmm">
                      <FontAwesomeIcon icon={faUserAlt} />
                    </span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            {/*--------------- Header-01 --------------- */}
            <Col className="d-md-none d-lg-block d-lg-block Navbar1">
              <div>
                {loader == true ? (
                  <ul className="borderAround BorderMargin d-flex">
                    {[1, 2, 3, 4]?.map((index) => (
                      <div key={index}>
                        <li className="NavText">
                          <MenuLoader />
                        </li>
                      </div>
                    ))}
                  </ul>
                ) : (
                  <ul className="borderAround BorderMargin d-flex">
                    {NavList?.map((data, index) => (
                      <div key={index}>
                        <Link
                          to={`/productDetail?category=${data}`}
                          style={{ textDecoration: "none" }}
                        >
                          <li className="NavText">
                            &nbsp;&nbsp;{data.toUpperCase()}&nbsp;&nbsp;
                            {index !== NavList.length - 1 ? " | " : ""}
                          </li>
                        </Link>
                      </div>
                    ))}
                  </ul>
                )}
              </div>

              <div className="HoverDetails"></div>
            </Col>

            {/*--------------- Header-01 --------------- */}

            {/*--------------- Header-02 --------------- */}
            <Col className="d-lg-none Navbar2">
              <div className="Barbutton">
                <div onClick={handleShow}>
                  <FontAwesomeIcon icon={faBars} />
                </div>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton className="TitleBG">
                    <Offcanvas.Title>
                      <div>
                        <span className="BarColor">
                          <FontAwesomeIcon icon={faBars} />
                        </span>
                        &nbsp;<span className="MenuTitle">MENU</span>
                      </div>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Accordion>
                      {/* <Accordion.Item eventKey="0">
                        <Accordion.Header>HOME</Accordion.Header>
                      </Accordion.Item> */}
                      <ListGroup>
                        <ListGroup.Item
                          className="Home"
                          style={{ borderRadius: "0", paddingLeft: "20px" }}
                        >
                          HOME
                        </ListGroup.Item>
                      </ListGroup>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>SHOES</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <p className="listTitle">WOMEN'S</p>
                            <div className="subList">
                              <p>Blouses</p>
                              <p className="subListPad">Evening Dresses</p>
                              <p className="subListPad">Summer Dresses</p>
                              <p className="subListPad">T-shirt Dresses</p>
                              <p className="subListPad">Tops</p>
                            </div>
                          </div>

                          <div className="listTitle2">
                            <p className="listTitle">ACCESSORIES</p>
                            <div className="subList">
                              <p>Blouses</p>
                              <p className="subListPad">Causal Dresses</p>
                              <p className="subListPad">Evening Dresses</p>
                              <p className="subListPad">Summer Dresses</p>
                              <p className="subListPad">Tops</p>
                            </div>
                          </div>

                          <div className="listTitle2">
                            <p className="listTitle">FASHION</p>
                            <div className="subList">
                              <p>Blouses</p>
                              <p className="subListPad">Causal Dresses</p>
                              <p className="subListPad">Evening Dresses</p>
                              <p className="subListPad">T-shirt</p>
                              <p className="subListPad">Tops</p>
                            </div>
                          </div>

                          <div className="listTitle2">
                            <p className="listTitle">BLOUSES</p>
                            <div className="subList">
                              <p>Blouses</p>
                              <p className="subListPad">Causal Dresses</p>
                              <p className="subListPad">Evening Dresses</p>
                              <p className="subListPad">T-shirt</p>
                              <p className="subListPad">Tops</p>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>WATCHES</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <p className="listTitle">ADIPISCING</p>
                            <div className="subList">
                              <p>Blouses</p>
                              <p className="subListPad">Evening Dresses</p>
                              <p className="subListPad">Summer Dresses</p>
                              <p className="subListPad">T-shirt Dresses</p>
                              <p className="subListPad">Tops</p>
                            </div>
                          </div>

                          <div className="listTitle2">
                            <p className="listTitle">ADIPISCING</p>
                            <div className="subList">
                              <p>Blouses</p>
                              <p className="subListPad">Causal Dresses</p>
                              <p className="subListPad">Evening Dresses</p>
                              <p className="subListPad">Summer Dresses</p>
                              <p className="subListPad">Tops</p>
                            </div>
                          </div>

                          <div className="listTitle2">
                            <p className="listTitle">ADIPISCING</p>
                            <div className="subList">
                              <p>Blouses</p>
                              <p className="subListPad">Causal Dresses</p>
                              <p className="subListPad">Evening Dresses</p>
                              <p className="subListPad">T-shirt</p>
                              <p className="subListPad">Tops</p>
                            </div>
                          </div>

                          <div className="listTitle2">
                            <p className="listTitle">ADIPISCING</p>
                            <div className="subList">
                              <p>Blouses</p>
                              <p className="subListPad">Causal Dresses</p>
                              <p className="subListPad">Evening Dresses</p>
                              <p className="subListPad">T-shirt</p>
                              <p className="subListPad">Tops</p>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                        <Accordion.Header>DRESSES</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <p className="listTitle">ADIPISCING</p>
                            <div className="subList">
                              <p>Blouses</p>
                              <p className="subListPad">Evening Dresses</p>
                              <p className="subListPad">Summer Dresses</p>
                              <p className="subListPad">T-shirt Dresses</p>
                              <p className="subListPad">Tops</p>
                            </div>
                          </div>

                          <div className="listTitle2">
                            <p className="listTitle">ADIPISCING</p>
                            <div className="subList">
                              <p>Blouses</p>
                              <p className="subListPad">Causal Dresses</p>
                              <p className="subListPad">Evening Dresses</p>
                              <p className="subListPad">Summer Dresses</p>
                              <p className="subListPad">Tops</p>
                            </div>
                          </div>

                          <div className="listTitle2">
                            <p className="listTitle">ADIPISCING</p>
                            <div className="subList">
                              <p>Blouses</p>
                              <p className="subListPad">Causal Dresses</p>
                              <p className="subListPad">Evening Dresses</p>
                              <p className="subListPad">T-shirt</p>
                              <p className="subListPad">Tops</p>
                            </div>
                          </div>

                          <div className="listTitle2">
                            <p className="listTitle">ADIPISCING</p>
                            <div className="subList">
                              <p>Blouses</p>
                              <p className="subListPad">Causal Dresses</p>
                              <p className="subListPad">Evening Dresses</p>
                              <p className="subListPad">T-shirt</p>
                              <p className="subListPad">Tops</p>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <ListGroup>
                        <ListGroup.Item
                          className="Home"
                          style={{
                            borderRadius: "0",
                            marginTop: "-1px",
                            paddingLeft: "20px",
                          }}
                        >
                          ACCESSORIES
                        </ListGroup.Item>
                      </ListGroup>

                      <ListGroup>
                        <ListGroup.Item
                          className="Home"
                          style={{
                            borderRadius: "0",
                            marginTop: "-2px",
                            paddingLeft: "20px",
                          }}
                        >
                          BLOG
                        </ListGroup.Item>
                      </ListGroup>

                      <ListGroup>
                        <ListGroup.Item
                          className="Home"
                          style={{
                            borderRadius: "0",
                            marginTop: "-2px",
                            paddingLeft: "20px",
                          }}
                        >
                          CONTACT
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </Col>
            {/*--------------- Header-02 --------------- */}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default Header;

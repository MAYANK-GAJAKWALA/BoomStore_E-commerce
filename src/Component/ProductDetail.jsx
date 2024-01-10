import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useParams } from "react-router-dom";

//Components
import Header from "../Component/Header";
import { Container } from "react-bootstrap";

//Images
import img1 from "../Images/Product_1.jpg";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//CSS
import "../CSS/ProductDetail.css";
import {
  faCartShopping,
  faCheck,
  faMessage,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const ProductDetail = () => {
  // Product Detail API //
  const [productDetail, setProductDetail] = useState([]);
  const { id } = useParams();

  const ProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProductDetail(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    ProductDetails();
  }, [id]);
  // Product Detail API //

  return (
    <Fragment>
      <Header />

      <Container>
        <Row>
          <div className="BreadCrumbMargin">
            <Breadcrumb>
              <Breadcrumb.Item active className="BreadCrumbText">
                <Link to={"/"} className="BreadCrumbTextHome">
                  Home
                </Link>
              </Breadcrumb.Item>

              <Breadcrumb.Item active className="BreadCrumbText">
                {productDetail.category}
              </Breadcrumb.Item>

              <Breadcrumb.Item active className="BreadCrumbText">
                {productDetail.title}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Row>

        <div>
          <Row>
            <Col lg={5}>
              <div className="DetailMargin">
                <Image src={productDetail.image} />
              </div>
            </Col>

            <Col className="mx-2">
              <div className="DetailMargin">
                <div>
                  <p className="detailTitle">{productDetail.title}</p>
                  <p className="detailPrice">${productDetail.price}</p>
                  <p className="detailDescription">
                    {productDetail.description}
                  </p>
                  <hr />
                </div>

                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <p className="ParameterText">Size</p>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="Secondary"
                      id="dropdown-basic"
                      className="border"
                    >
                      Select Size
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div style={{ display: "flex" }}>
                  <p className="ParameterText">Color</p>
                  <p className="OrangeBox"></p>
                  <p className="BlueBox"></p>
                </div>
                <hr />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  margin: "20px 0px",
                }}
              >
                <p className="ParameterText">Quantity</p>
                <div className="quantity-container">
                  <div className="quantity-button" id="decrease">
                    -
                  </div>
                  <input
                    type="number"
                    className="quantity-input"
                    id="quantity"
                    value="1"
                  />
                  <div className="quantity-button" id="increase">
                    +
                  </div>
                </div>
                <div className="AddToCart">
                  <p className="CartBorder " style={{ padding: "5px 20px" }}>
                    <span>
                      <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                    <span>&nbsp;|&nbsp;</span>
                    <span className=" AddToCartText">ADD TO CART</span>
                  </p>
                </div>

                <div className="InstockSign">
                  <span>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className="InstockText">In Stock</span>
                </div>
              </div>
              <hr />

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  marginTop: "-50px",
                }}
              >
                <p className="ParameterText">Share</p>
                <div className="IconSection ThreeIcon">
                  <a href="" className="outer">
                    <span className="inner">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </span>
                  </a>
                </div>

                <div className="IconSection IconLefPadThree">
                  <a href="" className="outer">
                    <span className="inner">
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </a>
                </div>

                <div className="IconSection IconLefPadThree">
                  <a href="" className="outer">
                    <span className="inner">
                      <FontAwesomeIcon icon={faPinterestP} />
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <div>
                  <p className="text-center reviewBox">
                    <span className="inner">
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span className="ReviewText">Write Your Review</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className="DescriptionSection">
                <p>
                  <span className="DesText">
                    DESCRIPTION&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="border-end"></span>
                  <span className="PDText">
                    &nbsp;&nbsp;&nbsp;&nbsp;PRODUCTS DETAILS
                  </span>
                </p>
                <p className="border Des2Text" style={{ textAlign: "justify" }}>
                  {productDetail.description}
                </p>
              </div>

              <div className="CommentSec">
                <div>
                  <span className="MessageIcon">
                    <FontAwesomeIcon icon={faMessage} />
                  </span>
                  <span className="CommentText"> Comments (0)</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default ProductDetail;

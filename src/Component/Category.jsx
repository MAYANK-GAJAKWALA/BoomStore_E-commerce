import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// CSS
import "../CSS/Category.css";

// Images
import Cat1 from "../Images/cat-1.jpg";
import Cat2 from "../Images/cat-2.jpg";
import Cat3 from "../Images/cat-3.jpg";

function Category() {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={4}>
            <div className="cateMargin">
              <div className="ImgMain">
                <Image src={Cat1} alt="" />
                <div className="ImgSec">MEN'S ACCESSORIES</div>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="cateMargin">
              <div className="ImgMain">
                <Image src={Cat2} alt="" />
                <div className="ImgSec">LUXURY JEWELLERY</div>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="cateMargin">
              <div className="ImgMain">
                <Image src={Cat3} alt="" />
                <div className="ImgRetail">RETAIL STORES</div>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </Container>
    </Fragment>
  );
}

export default Category;

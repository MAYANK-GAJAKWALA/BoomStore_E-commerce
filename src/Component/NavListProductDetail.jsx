import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

// CSS
import "../CSS/NavListProductDetail.css";

// Component
import Header from "../Component/Header";

function NavListProductDetail() {
  // Product List API //
  const [ProductCat, setProductCat] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const ProductCategories = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      if (category) {
        const filteredProducts = response.data.filter(
          (product) => category === product.category
        );
        setProductCat(filteredProducts);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    ProductCategories();
  }, [category]);
  // Product List API //

  return (
    <Fragment>
      <Header />
      <Container>
        <Row>
          <Col>
            <div className="BreadcrumbNav">
              <Breadcrumb>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <Breadcrumb.Item active>Home&nbsp;&nbsp;/</Breadcrumb.Item>
                </Link>
                <Breadcrumb.Item active>&nbsp;&nbsp;{category}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <div className="MainSideTitle">
              <p className="MainSideText">{category.toUpperCase()}</p>
            </div>
          </Col>
          <Col lg={9}>
            <div>
              <p className="ListSideTitle">{category.toUpperCase()}</p>
            </div>
            <div className="FilterIcon">
              <span>
                <FontAwesomeIcon icon={faFilter} />
              </span>
            </div>
            <div>
              <span>
                <div>
                  <select className="SelectLibrary" style={{ float: "right" }}>
                    <option value="relevance">Relevance</option>
                    <option value="best_sellers">Best Sellers</option>
                    <option value="name_az">Name: A to Z</option>
                    <option value="name_za">Name: Z to A</option>
                    <option value="price_low_high">Price: Low to High</option>
                    <option value="price_high_low">Price: High to Low</option>
                  </select>
                </div>
              </span>
              <span className="SortByText">Sort By:</span>
            </div>
          </Col>
        </Row>
        <Row>
          {ProductCat?.map((product) => (
            <Col lg={4} key={product.id}>
              <Link
                to={`/productDetail/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="NavProductListMargin">
                  <div>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        src={product.image}
                        style={{ height: "300px" }}
                      />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>${product.price}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
}

export default NavListProductDetail;

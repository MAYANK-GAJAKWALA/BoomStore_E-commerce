import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// CSS
import "../CSS/ProductList.css";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  // Product List API //
  const [product, setProduct] = useState([]);

  const Product = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    Product();
  }, []);
  // Product List API //
  return (
    <Fragment>
      <div>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="ProductListMargin text-center withLine">
                OUR PRODUCTS
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            {product?.map((data) => (
              <Col lg={3} md={6} className="mt-5">
                <Link
                  to={`/productDetail/${data.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div key={data.id}>
                    <div>
                      <div>
                        <Image src={data.image} style={{ height: "300px" }} />
                      </div>
                    </div>
                    <div>
                      <p className="ProductText">
                        {data.title} <br />
                        <br />
                        <p>${data.price}</p>
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default ProductList;

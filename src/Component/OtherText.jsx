import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

// CSS
import "../CSS/OtherText.css";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faRecycle,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";

function OtherText() {
  return (
    <Fragment>
      <Container>
        <div>
          <Row className="gx-5">
            <Col lg={4}>
              <div className="OtherTextMargin">
                <div className="text-center pt-3 IconSize">
                  <FontAwesomeIcon icon={faRecycle} />
                </div>
                <p className="text-center p-3 OtherTextStyle">
                  FREE SHIPPING WORLDWIDE
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="OtherTextMargin">
                <div className="text-center pt-3 IconSize">
                  <FontAwesomeIcon icon={faHeadphones} />
                </div>
                <p className="text-center p-3 OtherTextStyle">
                  UNLIMITED CUSTOMER SUPPORT
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="OtherTextMargin">
                <div className="text-center pt-3 IconSize">
                  <FontAwesomeIcon icon={faRefresh} />
                </div>
                <p className="text-center p-3 OtherTextStyle">
                  FREE RETURN AND EXCHANGE
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}

export default OtherText;

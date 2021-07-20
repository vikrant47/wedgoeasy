import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import {Engine} from "../../../modules/engine/core/engine";

const TwoColumn = ({section}) => {
  const towColumnData = section.getContents();
  return (
    <div className="banner-area space-pb--r70">
      <Container>
        <Row>
          {towColumnData &&
          towColumnData.map((single, key) => {
            return (
              <Col md={6}>
                <div key={key} className="single-banner">
                  <img
                    src={`${Engine.media(single.ref_image)}`}
                    alt="shop_banner_img1"
                  />
                  <div className="single-banner__info">
                    <h5>{single.title}</h5>
                    <h3 className="title">{single.sub_title}</h3>
                    <Link href="/shop/grid-left-sidebar">
                      <a className="link">Shop Now</a>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default TwoColumn;

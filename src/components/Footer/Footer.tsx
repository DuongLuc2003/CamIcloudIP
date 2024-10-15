import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer qt-9">
      <Container className="footer-container">
        <Row className="footer-container">
          <Col lg="3" className="footer-content">
            <div className="logo">
              <h1 className="text-white mb-4">Về chúng tôi</h1>
            </div>
            <p className="footer__text">
              camicloud.net là công ty liên kết với trên 20 ngân hàng và các tổ
              chức tài chính hàng đầu tại Việt Nam. Cho nên được nhiều khách
              hàng đánh giá về độ uy tín và chất lượng phục vụ trong lĩnh vực
              đầu tư tài chính, cho vay tiền online.
            </p>
          </Col>
          <Col lg="3" className="footer-content">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Liên hệ</h4>
              <ListGroup>
                <span className="ps-0 border-0">
                  <Link to="#">Điện Thoại:0977771467</Link>
                </span>
                <span className="ps-0 border-0">
                  <Link to="#">Email: giaphat111668@gmail.com</Link>
                </span>
                <span className="ps-0 border-0">
                  <Link to="#">Toàn Quốc</Link>
                </span>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" className="footer-content">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Cầm Icloud bằng Iphone – Tiện lợi</h4>
              <ListGroup>
                <span className="ps-0 border-0">
                  <Link to="/shop">✔ Chỉ cần có iPhone Xs Max trở lên  </Link>
                </span>
                <span className="ps-0 border-0">
                  <Link to="/cart">✔ Thủ tục đơn giản, giải ngân ngay</Link>
                </span>
                <span className="ps-0 border-0">
                  <Link to="/login">✔ Vay tối đa tới 80% giá trị máy</Link>
                </span>
                <span className="ps-0 border-0">
                  <Link to="#">✔ Không giữ Iphone</Link>
                </span>
                <span className="ps-0 border-0">
                  <Link to="#">✔ Không giữ Giấy tờ</Link>
                </span>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12" >
            <p className="footer__copyright">
              Coppyright {year} © Cầm Icloud
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

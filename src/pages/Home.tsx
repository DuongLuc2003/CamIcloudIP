import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/home.css";
import { useRegisterMutation } from "../api/auth";
import number1 from "../assets/images/number1.png";
import number2 from "../assets/images/number2.png";
import number3 from "../assets/images/number3.png";
import number4 from "../assets/images/number4.png";
import number5 from "../assets/images/number5.png";
import number6 from "../assets/images/number6.png";
import imglocation1 from "../assets/images/01.png";
import imglocation2 from "../assets/images/02.png";
import imglocation3 from "../assets/images/03.png";
import { Alert, Button } from "antd";

// import serviceIcon1 from "../assets/images/"
const Home = () => {

  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    address: "",
    iphone: "",
    loanAmount: 0,
});

const [register, { isLoading, isSuccess, isError }] = useRegisterMutation();

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value,
    }));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        await register(formData).unwrap(); // Gọi API
        setFormData({
            username: "",
            phone: "",
            address: "",
            iphone: "",
            loanAmount: 0,
        }); // Reset form sau khi thành công
    } catch (err) {
        console.error("Failed to register:", err);
    }
};
  return (
    <div className="container">
      <section className="hero__section">
        <Container className="bannergr">
          <Row className="banner-layers justify-content-center align-items-center">
            <Col lg="5" md="6">
              <div className="hero__content">
                <h2>Ưu Điểm tuyệt vời</h2>
                <h3>
                  Vay tiền icloud iphone – Chỉ cần bạn có Iphone là bạn có tiền
                  ! Vay qua icloud iphone – Tài chính cho mọi nhà – Không cần
                  chứng minh thu nhập – Không thủ tục rườm rà – Vẫn có Iphone để
                  sử dụng hằng ngày.
                </h3>
              </div>
            </Col>

            <Col lg="4" md="6">
              <div className="customer-form">
                <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Họ và Tên"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Số điện thoại"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Địa chỉ"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    id="iphone"
                    name="iphone"
                    value={formData.iphone}
                    onChange={handleChange}
                    placeholder="Dòng iPhone"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="number"
                    id="loanAmount"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    placeholder="Số tiền vay"
                    required
                />
            </div>
            <Button type="primary" htmlType="submit" loading={isLoading}>
                Gửi Thông Tin
            </Button>
            {isSuccess && <Alert message="Đăng ký thành công!" type="success" />}
            {isError && <Alert message="Đăng ký thất bại!" type="error" />}
        </form>


              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="policy d-flex justify-content-center section" id="gioi-thieu">
        <div className="policy-content">
          <div className="policy-content-top">
          <h3>VAY TIỀN ICLOUD IPHONE NHANH CHÓNG LÊN TỚI 80% GIÁ TRỊ MÁY</h3>
          <p>
            <strong>Vay tiền bằng iphone,</strong>icloud là một dịch vụ cho vay
            tiền online bằng cách khách hàng sẽ dùng tài khoản icloud của mình
            để vay tiền. Mọi thủ tục, quá trình vay tiền, trả tiền… đều được
            thực hiện online mà không cần phải gặp mặt trực tiếp hay đến tận nơi
            cho vay tiền.
          </p>

          <p>
            <strong>Vay tiền icloud iphone</strong> đã cho ra đời dịch vụ vay <strong> tiền online bằng
            điện thoại Iphone (vay theo iphone)</strong> nhanh nhất bằng Icloud thông qua
            điện thoại, người tiêu dùng hoàn toàn có thể đăng ký vay online chỉ
            cần 03 bước cực kỳ đơn giản: điền thông tin cá nhân, số tiền cần vay
            và đăng ký. Chỉ như thế là đủ, không cần rườm rà, không cần kê khai
            tất tần tật các thông tin cá nhân, nhân khẩu, tài sản, nghề nghiệp,
            nơi làm việc.
          </p>
          </div>
          
          <div className="benefits row">
            <div className="col-md-6">
              <div className="benefits-content d-flex ">
              <div className="icon me-3">
					<div className="icon-inner" >
<svg width="35" height="35" viewBox="0 0 200 200">
  <path d="M188.991,86.178h-64.844c-1.197-11.607-9.834-21.036-21.047-23.432V33.674c5.385,2.214,9.19,7.51,9.19,13.684
		c0,3.313,2.687,6,6,6s6-2.687,6-6c0-12.852-9.097-23.615-21.19-26.2V10.22c0-3.313-2.687-6-6-6s-6,2.687-6,6v11.121
		c-11.696,2.876-20.399,13.446-20.399,26.017S79.404,70.499,91.1,73.375v12.804H6c-3.313,0-6,2.687-6,6v54.758c0,3.314,2.687,6,6,6
		h31.492l-6.692,30.551c-0.389,1.774,0.047,3.63,1.187,5.045c1.139,1.416,2.857,2.239,4.674,2.239H158.33
		c1.817,0,3.536-0.823,4.674-2.239c1.139-1.415,1.575-3.271,1.187-5.045l-6.692-30.551h31.492c3.313,0,6-2.686,6-6V92.178
		C194.991,88.865,192.305,86.178,188.991,86.178z M82.701,47.358c0-5.865,3.439-10.928,8.399-13.32v26.64
		C86.14,58.286,82.701,53.223,82.701,47.358z M103.1,75.262c4.559,1.875,7.978,5.96,8.921,10.917H103.1V75.262z M150.873,178.771
		h-15.899l-7.763-56.482h11.291L150.873,178.771z M56.49,122.289h52.281l4.313,56.482H44.118L56.49,122.289z M182.991,140.937
		H154.87l-4.084-18.647h8.627c3.313,0,6-2.687,6-6s-2.687-6-6-6H143.33H51.662H35.579c-3.313,0-6,2.687-6,6s2.687,6,6,6h8.627
		l-4.084,18.647H12V98.178h170.991V140.937z" fill="rgb(215, 209, 47)"></path>
</svg>
					</div>
				</div>
        <div className="benefits-text">
        <h4>Dịch vụ hoàn toàn tự động</h4>
                <span>
                  Chỉ mất 10 phút là quý khách đã có thể nhận được khoản vay,
                  cầm từ 3.000.000 đến 20.000.000 đồng vào tài khoản
                </span>
        </div>
              </div>
              <div className="benefits-content d-flex">
              <div className="icon me-3">
					<div className="icon-inner" >
<svg width="35" height="35" viewBox="0 0 200 200">
  <path d="M188.991,86.178h-64.844c-1.197-11.607-9.834-21.036-21.047-23.432V33.674c5.385,2.214,9.19,7.51,9.19,13.684
		c0,3.313,2.687,6,6,6s6-2.687,6-6c0-12.852-9.097-23.615-21.19-26.2V10.22c0-3.313-2.687-6-6-6s-6,2.687-6,6v11.121
		c-11.696,2.876-20.399,13.446-20.399,26.017S79.404,70.499,91.1,73.375v12.804H6c-3.313,0-6,2.687-6,6v54.758c0,3.314,2.687,6,6,6
		h31.492l-6.692,30.551c-0.389,1.774,0.047,3.63,1.187,5.045c1.139,1.416,2.857,2.239,4.674,2.239H158.33
		c1.817,0,3.536-0.823,4.674-2.239c1.139-1.415,1.575-3.271,1.187-5.045l-6.692-30.551h31.492c3.313,0,6-2.686,6-6V92.178
		C194.991,88.865,192.305,86.178,188.991,86.178z M82.701,47.358c0-5.865,3.439-10.928,8.399-13.32v26.64
		C86.14,58.286,82.701,53.223,82.701,47.358z M103.1,75.262c4.559,1.875,7.978,5.96,8.921,10.917H103.1V75.262z M150.873,178.771
		h-15.899l-7.763-56.482h11.291L150.873,178.771z M56.49,122.289h52.281l4.313,56.482H44.118L56.49,122.289z M182.991,140.937
		H154.87l-4.084-18.647h8.627c3.313,0,6-2.687,6-6s-2.687-6-6-6H143.33H51.662H35.579c-3.313,0-6,2.687-6,6s2.687,6,6,6h8.627
		l-4.084,18.647H12V98.178h170.991V140.937z" fill="rgb(215, 209, 47)"></path>
</svg>
					</div>
				</div>
        <div className="benefits-text">
        <h4>Dịch vụ hoàn toàn tự động</h4>
                <span>
                  Chỉ mất 10 phút là quý khách đã có thể nhận được khoản vay,
                  cầm từ 3.000.000 đến 20.000.000 đồng vào tài khoản
                </span>
        </div>
              </div>
              <div className="benefits-content d-flex">
              <div className="icon me-3">
					<div className="icon-inner" >
<svg width="35" height="35" viewBox="0 0 200 200">
  <path d="M188.991,86.178h-64.844c-1.197-11.607-9.834-21.036-21.047-23.432V33.674c5.385,2.214,9.19,7.51,9.19,13.684
		c0,3.313,2.687,6,6,6s6-2.687,6-6c0-12.852-9.097-23.615-21.19-26.2V10.22c0-3.313-2.687-6-6-6s-6,2.687-6,6v11.121
		c-11.696,2.876-20.399,13.446-20.399,26.017S79.404,70.499,91.1,73.375v12.804H6c-3.313,0-6,2.687-6,6v54.758c0,3.314,2.687,6,6,6
		h31.492l-6.692,30.551c-0.389,1.774,0.047,3.63,1.187,5.045c1.139,1.416,2.857,2.239,4.674,2.239H158.33
		c1.817,0,3.536-0.823,4.674-2.239c1.139-1.415,1.575-3.271,1.187-5.045l-6.692-30.551h31.492c3.313,0,6-2.686,6-6V92.178
		C194.991,88.865,192.305,86.178,188.991,86.178z M82.701,47.358c0-5.865,3.439-10.928,8.399-13.32v26.64
		C86.14,58.286,82.701,53.223,82.701,47.358z M103.1,75.262c4.559,1.875,7.978,5.96,8.921,10.917H103.1V75.262z M150.873,178.771
		h-15.899l-7.763-56.482h11.291L150.873,178.771z M56.49,122.289h52.281l4.313,56.482H44.118L56.49,122.289z M182.991,140.937
		H154.87l-4.084-18.647h8.627c3.313,0,6-2.687,6-6s-2.687-6-6-6H143.33H51.662H35.579c-3.313,0-6,2.687-6,6s2.687,6,6,6h8.627
		l-4.084,18.647H12V98.178h170.991V140.937z" fill="rgb(215, 209, 47)"></path>
</svg>
					</div>
				</div>
        <div className="benefits-text">
        <h4>Dịch vụ hoàn toàn tự động</h4>
                <span>
                  Chỉ mất 10 phút là quý khách đã có thể nhận được khoản vay,
                  cầm từ 3.000.000 đến 20.000.000 đồng vào tài khoản
                </span>
        </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="benefits-content d-flex">
              <div className="icon me-3">
					<div className="icon-inner" >
<svg width="35" height="35" viewBox="0 0 200 200">
  <path d="M188.991,86.178h-64.844c-1.197-11.607-9.834-21.036-21.047-23.432V33.674c5.385,2.214,9.19,7.51,9.19,13.684
		c0,3.313,2.687,6,6,6s6-2.687,6-6c0-12.852-9.097-23.615-21.19-26.2V10.22c0-3.313-2.687-6-6-6s-6,2.687-6,6v11.121
		c-11.696,2.876-20.399,13.446-20.399,26.017S79.404,70.499,91.1,73.375v12.804H6c-3.313,0-6,2.687-6,6v54.758c0,3.314,2.687,6,6,6
		h31.492l-6.692,30.551c-0.389,1.774,0.047,3.63,1.187,5.045c1.139,1.416,2.857,2.239,4.674,2.239H158.33
		c1.817,0,3.536-0.823,4.674-2.239c1.139-1.415,1.575-3.271,1.187-5.045l-6.692-30.551h31.492c3.313,0,6-2.686,6-6V92.178
		C194.991,88.865,192.305,86.178,188.991,86.178z M82.701,47.358c0-5.865,3.439-10.928,8.399-13.32v26.64
		C86.14,58.286,82.701,53.223,82.701,47.358z M103.1,75.262c4.559,1.875,7.978,5.96,8.921,10.917H103.1V75.262z M150.873,178.771
		h-15.899l-7.763-56.482h11.291L150.873,178.771z M56.49,122.289h52.281l4.313,56.482H44.118L56.49,122.289z M182.991,140.937
		H154.87l-4.084-18.647h8.627c3.313,0,6-2.687,6-6s-2.687-6-6-6H143.33H51.662H35.579c-3.313,0-6,2.687-6,6s2.687,6,6,6h8.627
		l-4.084,18.647H12V98.178h170.991V140.937z" fill="rgb(215, 209, 47)"></path>
</svg>
					</div>
				</div>
        <div className="benefits-text">
        <h4>Dịch vụ hoàn toàn tự động</h4>
                <span>
                  Chỉ mất 10 phút là quý khách đã có thể nhận được khoản vay,
                  cầm từ 3.000.000 đến 20.000.000 đồng vào tài khoản
                </span>
        </div>
              </div>
              <div className="benefits-content d-flex">
              <div className="icon me-3" >
					<div className="icon-inner" >
<svg width="35" height="35" viewBox="0 0 200 200">
  <path d="M188.991,86.178h-64.844c-1.197-11.607-9.834-21.036-21.047-23.432V33.674c5.385,2.214,9.19,7.51,9.19,13.684
		c0,3.313,2.687,6,6,6s6-2.687,6-6c0-12.852-9.097-23.615-21.19-26.2V10.22c0-3.313-2.687-6-6-6s-6,2.687-6,6v11.121
		c-11.696,2.876-20.399,13.446-20.399,26.017S79.404,70.499,91.1,73.375v12.804H6c-3.313,0-6,2.687-6,6v54.758c0,3.314,2.687,6,6,6
		h31.492l-6.692,30.551c-0.389,1.774,0.047,3.63,1.187,5.045c1.139,1.416,2.857,2.239,4.674,2.239H158.33
		c1.817,0,3.536-0.823,4.674-2.239c1.139-1.415,1.575-3.271,1.187-5.045l-6.692-30.551h31.492c3.313,0,6-2.686,6-6V92.178
		C194.991,88.865,192.305,86.178,188.991,86.178z M82.701,47.358c0-5.865,3.439-10.928,8.399-13.32v26.64
		C86.14,58.286,82.701,53.223,82.701,47.358z M103.1,75.262c4.559,1.875,7.978,5.96,8.921,10.917H103.1V75.262z M150.873,178.771
		h-15.899l-7.763-56.482h11.291L150.873,178.771z M56.49,122.289h52.281l4.313,56.482H44.118L56.49,122.289z M182.991,140.937
		H154.87l-4.084-18.647h8.627c3.313,0,6-2.687,6-6s-2.687-6-6-6H143.33H51.662H35.579c-3.313,0-6,2.687-6,6s2.687,6,6,6h8.627
		l-4.084,18.647H12V98.178h170.991V140.937z" fill="rgb(215, 209, 47)"></path>
</svg>
					</div>
				</div>
        <div className="benefits-text">
        <h4>Dịch vụ hoàn toàn tự động</h4>
                <span>
                  Chỉ mất 10 phút là quý khách đã có thể nhận được khoản vay,
                  cầm từ 3.000.000 đến 20.000.000 đồng vào tài khoản
                </span>
        </div>
              </div>
              <div className="benefits-content d-flex">
              <div className="icon me-3">
					<div className="icon-inner" >
<svg width="35" height="35" viewBox="0 0 200 200">
  <path d="M188.991,86.178h-64.844c-1.197-11.607-9.834-21.036-21.047-23.432V33.674c5.385,2.214,9.19,7.51,9.19,13.684
		c0,3.313,2.687,6,6,6s6-2.687,6-6c0-12.852-9.097-23.615-21.19-26.2V10.22c0-3.313-2.687-6-6-6s-6,2.687-6,6v11.121
		c-11.696,2.876-20.399,13.446-20.399,26.017S79.404,70.499,91.1,73.375v12.804H6c-3.313,0-6,2.687-6,6v54.758c0,3.314,2.687,6,6,6
		h31.492l-6.692,30.551c-0.389,1.774,0.047,3.63,1.187,5.045c1.139,1.416,2.857,2.239,4.674,2.239H158.33
		c1.817,0,3.536-0.823,4.674-2.239c1.139-1.415,1.575-3.271,1.187-5.045l-6.692-30.551h31.492c3.313,0,6-2.686,6-6V92.178
		C194.991,88.865,192.305,86.178,188.991,86.178z M82.701,47.358c0-5.865,3.439-10.928,8.399-13.32v26.64
		C86.14,58.286,82.701,53.223,82.701,47.358z M103.1,75.262c4.559,1.875,7.978,5.96,8.921,10.917H103.1V75.262z M150.873,178.771
		h-15.899l-7.763-56.482h11.291L150.873,178.771z M56.49,122.289h52.281l4.313,56.482H44.118L56.49,122.289z M182.991,140.937
		H154.87l-4.084-18.647h8.627c3.313,0,6-2.687,6-6s-2.687-6-6-6H143.33H51.662H35.579c-3.313,0-6,2.687-6,6s2.687,6,6,6h8.627
		l-4.084,18.647H12V98.178h170.991V140.937z" fill="rgb(215, 209, 47)"></path>
</svg>
					</div>
				</div>
        <div className="benefits-text">
        <h4>Dịch vụ hoàn toàn tự động</h4>
                <span>
                  Chỉ mất 10 phút là quý khách đã có thể nhận được khoản vay,
                  cầm từ 3.000.000 đến 20.000.000 đồng vào tài khoản
                </span>
        </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="procedure" id="thu-tuc-cam-icloud">
        <div className="procedure-content">
        <h3>THỦ TỤC CẦM ICLOUD IPHONE</h3>
        <p>
          Thủ tục <strong> vay tiền bằng iphone</strong> tại Tp.HCM, Hà Nội, Hải Phòng, Quảng
          Ninh, và trên toàn quốc vô cùng đơn giản, nhanh gọn. Đến với <strong>vay tiền
          icloud iphone</strong>  bạn tin chắc rằng bạn sẽ được <strong>vay tiền theo icloud</strong> ngay
          trong ngày khi chỉ cần đầy và đủ các điều kiện đơn giản của chúng tôi
          là chỉ cần chứng minh nhân dân và sổ hộ khẩu để đối chiếu mang đến
          công ty làm thủ tục là bạn đã vay được tiền ngay, đó là cam kết của
          chúng tôi. Liên lạc ngay để nhân viên chúng tôi giúp bạn giải đáp các
          thắc mắc về vay tiền ngay.
        </p>
        <div className="procedure-item">
          <div className=""></div>
          <div className="procedure-item__gr1">
            <img src={imglocation1} alt="" className=""/>
            <div className="procedure-item__content">
            <h4>Đăng ký vay qua icloud iphone qua điện thoại</h4>
            <p>
              Hoàn thành đơn đăng ký trực tuyến an toàn và đơn giản chỉ trong
              vài phút….
            </p>
            </div>
          </div>
        </div>
        <div className="procedure-item">
          <div className="box-sup"></div>
          <div className="procedure-item__gr2">
            <img src={imglocation2} alt="" />
            <div className="procedure-item__content">
            <h4>Đăng ký vay qua icloud iphone qua điện thoại</h4>
            <p>
              Hoàn thành đơn đăng ký trực tuyến an toàn và đơn giản chỉ trong
              vài phút….
            </p>
            </div>
          </div>
        </div>
        <div className="procedure-item">
          <div className="box-sup"></div>
          <div className="procedure-item__gr3">
            <img src={imglocation3} alt="" />
            <div className="procedure-item__content">
            <h4>Đăng ký vay qua icloud iphone qua điện thoại</h4>
            <p>
              Hoàn thành đơn đăng ký trực tuyến an toàn và đơn giản chỉ trong
              vài phút….
            </p>
            </div>
          </div>
        </div>
        </div>
 
      </section>
      <section className="benefit" id="cam-icloud">
<div className="benefit-gr">
<h3>LỢI ÍCH KHI ĐẾN VỚI CAMICLOUD.NET (VAY TIỀN ICLOUD UY TÍN)</h3>
        <p>
          Dịch vụ <strong>cầm Icloud iphone (vay tiền bằng icloud iphone)</strong> hoạt động trên
          toàn quốc. Bạn có thể nhận tiền vào thẻ ngân hàng mà không cần rời
          khỏi nhà tại bất kỳ ở đâu, tỉnh/thành nào.
        </p>
        <p>
          So với dịch vụ vay tiền mặt không thế chấp thì dịch vụ cầm icloud
          Online bằng điện thoại Iphone của camicloud.net có nhiều ưu điểm vượt
          trội hơn, bạn chỉ cần có máy tính hoặc điện thoại Iphone, truy cập vào
          website, sau đó điền <strong> camicloud.net</strong> form thông tin cá nhân, số tiền cần
          vay, việc còn lại nhân viên giao dịch sẽ có trách nhiệm tư vấn và hoàn
          tất thủ tục vay tiền vay qua icloud iphone cho bạn.
        </p>
        <div className="d-flex ">
          <div className="col-number1 col-md-6">
            <div className="number-gr">
              <img src={number1} alt="" />
              <span>
                Cuối tháng có nhiều khoản phải chi tiêu: tiền điện nước, đóng
                học cho con, tiếp đãi bạn bè, mua sắm … mà chưa có lương?
              </span>
            </div>
            <div className="number-gr">
              <img src={number2} alt="" />
              <span>
                Cuối tháng có nhiều khoản phải chi tiêu: tiền điện nước, đóng
                học cho con, tiếp đãi bạn bè, mua sắm … mà chưa có lương?
              </span>
            </div>
            <div className="number-gr">
              <img src={number3} alt="" />
              <span>
                Cuối tháng có nhiều khoản phải chi tiêu: tiền điện nước, đóng
                học cho con, tiếp đãi bạn bè, mua sắm … mà chưa có lương?
              </span>
            </div>
          </div>
          <div className="col-number2">
            <div className="number-gr">
              <img src={number4} alt="" />
              <span>
                Cuối tháng có nhiều khoản phải chi tiêu: tiền điện nước, đóng
                học cho con, tiếp đãi bạn bè, mua sắm … mà chưa có lương?
              </span>
            </div>
            <div className="number-gr">
              <img src={number5} alt="" />
              <span>
                Cuối tháng có nhiều khoản phải chi tiêu: tiền điện nước, đóng
                học cho con, tiếp đãi bạn bè, mua sắm … mà chưa có lương?
              </span>
            </div>
            <div className="number-gr">
              <img src={number6} alt="" />
              <span>
                Cuối tháng có nhiều khoản phải chi tiêu: tiền điện nước, đóng
                học cho con, tiếp đãi bạn bè, mua sắm … mà chưa có lương?
              </span>
            </div>
          </div>
        </div>
</div>
      </section>
      <section className="register">
<div className="register-gr">
<h2>ĐĂNG KÝ VAY TIỀN ICLOUD IPHONE</h2>
        <div className="register-col d-flex ">
          <div className="register-col__1 col-md-6">
            <h3>Cầm icloud Iphone là gì?</h3>
            <p>
              Khách hàng vay qua icloud iphone của mình để vay tiền. Cho cầm
              Icloud Iphone online không cần gặp mặt. Không cần đến tận nơi cho
              vay tiền. Toàn bộ thủ tục vay tiền icloud iphone, cầm icloud đều
              được thực hiện online qua internet. Thủ tục đơn giản nhanh chóng.
              Từ lúc khách hàng liên hệ với chúng tôi hỏi về thủ tục vay đến lúc
              nhận được tiền chỉ diễn ra trong vòng 30 phút.Trả lời ngay khách
              hàng có đủ điều kiện vay tiền qua vay qua icloud iphone online hay
              không. Không cần chờ đợi kết quả.
            </p>
            <span>Hotline: 0764216666</span><br />
            <span> giaphat111668@gmail.com</span>
          </div>
          <div className="register-col__2 col-md-6">
          <div className="customer-form2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Họ và Tên"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Số điện thoại"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Địa chỉ"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    id="iphone"
                    name="iphone"
                    value={formData.iphone}
                    onChange={handleChange}
                    placeholder="Dòng iPhone"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="number"
                    id="loanAmount"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    placeholder="Số tiền vay"
                    required
                />
            </div>
            <Button type="primary" htmlType="submit" loading={isLoading}>
                Gửi Thông Tin
            </Button>
            {isSuccess && <Alert message="Đăng ký thành công!" type="success" />}
            {isError && <Alert message="Đăng ký thất bại!" type="error" />}
        </form>
              </div>
          </div>
        </div>
</div>
      </section>
      <section className="cskv">
         <div className="cskv-gr">
         <h3>CHÍNH SÁCH KHOẢN VAY</h3>
        <div className="">
          <ul className="list-container">
            <li>Giải ngân trong ngày</li>
            <li>Bảo mật thông tin người vay</li>
            <li>Thời gian linh hoạt tối thiểu 61 ngày</li>
            <li>Thời gian vay tối đa 36 tháng</li>
            <li>Chi phí vay tối đa 36%/năm.</li>
            <li>Không phát sinh thêm bất kỳ chi phí</li>
            <li>100% tài sản được niêm phong</li>
          </ul>
        </div>
        <p>
          Chúng tôi không phải là nhà cung cấp cho vay và không phát hành các
          khoản vay từ tài khoản của chính mình. Dịch vụ của Chúng tôi giúp đánh
          giá những người cho vay đã được xác minh / tin cậy theo thời gian thực
          với các sản phẩm tài chính đa dạng, có thể hoàn trả linh hoạt từ 91
          đến 120 ngày với mức lãi vay APR tối thiểu là 0% và tối đa là 427%. Ví
          dụ, đối với khoản vay 6,000,000 VND, với thời gian hoàn trả trong 120
          ngày, chi phí bổ sung sẽ là 720,000 VND, và do đó tổng chi phí phải
          trả sẽ lên tới 6,720,000 VND với APR là 36%. Chúng tôi sẽ không tính
          phí sử dụng dịch vụ của chúng tôi. Chi phí chính xác của mỗi khoản vay
          phụ thuộc vào từng trường hợp cá nhân. Bạn sẽ luôn nhận được thông tin
          đầy đủ chính xác về APR và tất cả các khoản phí trước khi ký hợp đồng
          vay. <br /><br />Chúng tôi chỉ là đơn vị tư vấn, kết nối giữa người vay và người
          cho vay, chúng tôi không chịu bất kỳ trách nhiệm gì về mặt pháp lý !
        </p>
        <h2 className="section-title section-title-center">
          <b></b>
          <span className="section-title-main">
             TIN TỨC BỔ ÍCH
             
          </span>
          <b></b>
        </h2>
         </div>
      </section>
      <section>
        <div className="sup-footer"></div>
      </section>
      <section className="footer"></section>
    </div>
  );
};

export default Home;

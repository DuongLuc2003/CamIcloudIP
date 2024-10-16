import React, { useRef, useEffect, useState } from 'react';
import './header.css';
import { Container, Row } from 'reactstrap';
import userIcon from '../../assets/images/logoApple.png';
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";
import UserForm from "../Button/form";  // Form đăng ký vay
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Header = () => {
  const headerRef = useRef<HTMLFormElement | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State để theo dõi trạng thái menu
  const [isSticky, setIsSticky] = useState(false);
  // Function hiển thị form khi click nút "Đăng ký vay"
  const handleShowForm = () => {
    setShowForm(true);
    document.body.style.overflow = 'hidden'; // Ngăn cuộn khi mở form
  };

  // Function ẩn form khi click ra ngoài màn hình
  const handleCloseForm = () => {
    setShowForm(false);
    document.body.style.overflow = 'auto'; // Cho phép cuộn lại khi đóng form
  };

  // Lắng nghe sự kiện click ra ngoài form
  const handleClickOutside = (event:any) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setShowForm(false);  // Ẩn form nếu click ra ngoài
    }
  };
  const scrollToSection = (sectionId:any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Đổi trạng thái mở/đóng của menu khi nhấn vào icon
  };
  const reloadPage = () => {
    window.location.reload(); // Reload lại trang
  };
 // Theo dõi sự kiện cuộn
 useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) { // Khi cuộn quá 100px sẽ ghim header
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
useEffect(() => {
    return () => {
        document.body.style.overflow = 'auto';
    };
}, []);

  useEffect(() => {
    if (showForm) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showForm]);

  return (
    <header className={`header ${showHeader ? 'show' : ''}`} ref={headerRef}>
      <Container className='container'>
        <Row>
          <div className="header-top d-flex flex-row justify-content-between align-items-center top__nav" style={{ height: '100px' }}>
            <div className="d-flex align-items-center header-left">
              <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                <TfiEmail />
              </div>
              <span className='m-2'> duongluc131103@gmail.com | </span>
              <FaPhone /> <span className='m-2'>0977771467</span>
            </div>
            <div className="d-flex align-items-center header-right">
              <button className="button-custom1">TƯ VẤN VAY: 0977771467</button>
              {/* Nút Đăng ký vay */}
              <button className="button-custom2" onClick={handleShowForm}>ĐĂNG KÝ NGAY</button>
            </div>
          </div>
        </Row>
        <Row>
          <div  className={`nav__wrapper ${isSticky ? 'sticky-header' : ''}`}>
            <div className='navigation'>
            <ul className="d-flex ">
                <li className='me-4' onClick={() => scrollToSection('gioi-thieu')}><span>Giới thiệu</span></li>
                <li onClick={() => scrollToSection('thu-tuc-cam-icloud')}><span>Thủ tục Cầm Icloud</span></li>
              </ul>
              <button className="button-custom2 button-register" onClick={handleShowForm}>
    ĐĂNG KÝ
  </button>
            </div>

            <div className="logo">
        <img src={userIcon} alt="User Icon" onClick={reloadPage} style={{ cursor: 'pointer' }} />
      </div>

            <div className="d-flex nav-right">
              <ul className="d-flex">
                <li onClick={() => scrollToSection('cam-icloud')}><span>CẦM ICLOUD TRONG NGÀY</span></li>
                <li ><span>TIN TỨC</span></li>
              </ul>
              <div className="">
      {/* Icon mở menu chỉ hiển thị ở tablet và mobile */}
      {!menuOpen && (
        <AiOutlineMenu className='menu_icon' onClick={toggleMenu} />
      )}

      {/* Menu sẽ sổ ra khi menuOpen là true */}
      {menuOpen && (
        <div className="menu-overlay">
          {/* Icon đóng menu */}
          <AiOutlineClose className='close_icon' onClick={toggleMenu} />

          <ul className="menu-list">
            <li><a  onClick={() => scrollToSection('gioi-thieu')}>GIỚI THIỆU</a></li>
            <li><a onClick={() => scrollToSection('thu-tuc-cam-icloud')}>THỦ TỤC CẦM ICLOUD</a></li>
            <li><a onClick={() => scrollToSection('cam-icloud')}>CẦM ICLOUD TRONG NGÀY</a></li>
            <li><a >TIN TỨC</a></li>
          </ul>
        </div>
      )}
    </div>
            </div>
          </div>
        </Row>
      </Container>
      {/* Hiển thị form khi showForm = true */}
      {showForm && <UserForm onClose={handleCloseForm} />}
    </header>
  );
};

export default Header;

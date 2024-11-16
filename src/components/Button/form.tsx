import React, { useRef, useEffect } from "react";
import "./form.css"; 
import { GrClose } from "react-icons/gr";
// Nếu bạn đang dùng functional component
interface UserFormProps {
  onClose: () => void; // Định nghĩa prop onClose là một function
}
const UserForm: React.FC<UserFormProps> = ({ onClose }: { onClose: () => void }) => {
  const formRef = useRef<HTMLDivElement | null>(null);
  // Ngăn sự kiện click vào form làm kích hoạt việc ẩn form
  const handleClickInside = (e:any) => {
    e.stopPropagation();
  };

// Đảm bảo cuộn trở lại khi component bị unmounted (nếu người dùng rời khỏi trang hoặc unmount component)
useEffect(() => {
    return () => {
        document.body.style.overflow = 'auto';
    };
}, []);
 // Hiển thị form với hiệu ứng từ từ
 useEffect(() => {
  if (formRef.current) {
    setTimeout(() => {
      formRef.current?.classList.add('show');
    }, 10); // Delay nhỏ để kích hoạt transition sau khi form được render
  }
}, []);
  return (
    <div className="form-overlay" onClick={onClose}>
            <div className="" ref={formRef} onClick={handleClickInside}>
          <GrClose onClick={onClose} className="close-icon"/>
        </div>
      <div className="user-form" ref={formRef} onClick={handleClickInside}>
        <form>
            <h3 className="fw-bolder text-center">ĐĂNG KÝ NGAY</h3>
          <div className="form-group_popup">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Họ và Tên"
              required
            />
          </div>
          <div className="form-group_popup">
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Số điện thoại"
              required
            />
          </div>
          <div className="form-group_popup">
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Địa chỉ"
              required
            />
          </div>
          <div className="form-group_popup">
            <input
              type="text"
              id="iphone"
              name="iphone"
              placeholder="Dòng iPhone"
              required
            />
          </div>
          <div className="form-group_popup">
            <input
              type="number"
              id="loanAmount"
              name="loanAmount"
              placeholder="Số tiền vay"
              required
            />
          </div>
          <button type="submit">GỬI THÔNG TIN</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

import React, { useRef, useEffect, useState } from "react";
import "./form.css"; 
import { GrClose } from "react-icons/gr";
import { useRegisterMutation } from "../../api/auth";
// Nếu bạn đang dùng functional component
interface UserFormProps {
  onClose: () => void; // Định nghĩa prop onClose là một function
}
const UserForm: React.FC<UserFormProps> = ({ onClose }: { onClose: () => void }) => {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [register] = useRegisterMutation();
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    address: "",
    iphone: "",
    loanAmount: "",
});
  // Ngăn sự kiện click vào form làm kích hoạt việc ẩn form
  const handleClickInside = (e:any) => {
    e.stopPropagation();
  };
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
            loanAmount: "",
        }); // Reset form sau khi thành công
    } catch (err) {
        console.error("Failed to register:", err);
    }
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
        <form onSubmit={handleSubmit}>
            <h3 className="fw-bolder text-center">ĐĂNG KÝ NGAY</h3>
          <div className="form-group_popup">
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
          <div className="form-group_popup">
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
          <div className="form-group_popup">
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
          <div className="form-group_popup">
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
          <div className="form-group_popup">
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
          <button type="submit">GỬI THÔNG TIN</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

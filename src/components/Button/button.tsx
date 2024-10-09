import React, { useState, useEffect } from "react";
import UserForm from "../Button/form";
import '../Header/header.css'

const ButtonAction = () => {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
        document.body.style.overflow = 'hidden'; // Ngăn cuộn khi mở form
    };

    const handleCloseForm = () => {
        setShowForm(false);
        document.body.style.overflow = 'auto'; // Cho phép cuộn lại khi đóng form
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div>
            <button className="button-custom2" onClick={handleShowForm}>
                Đăng ký vay
            </button>
            {showForm && <UserForm onClose={handleCloseForm} />}
        </div>
    );
};

export default ButtonAction;

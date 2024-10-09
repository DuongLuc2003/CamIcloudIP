import React from "react";
import { Button, Skeleton, Popconfirm, Alert, Table } from "antd";
import {useGetAllUserQuery, useRemoveUserMutation} from "../../api/auth"; // Make sure to import the appropriate queries and mutations
import "../../styles/button.css";
import "../../index.css";
import { useState } from "react";
type UserData = {
    _id: string;
    username: string;
    phone: string;
    address: string;
    iphone:string;
    loanAmount:number
};
const AdminUser = () => {
    const { data: userData,isLoading }:any = useGetAllUserQuery();
    console.log(userData);
    const [removeUser, { isSuccess: isRemoveSuccess }] = useRemoveUserMutation();
    const [userList, setUserList] = useState<UserData[]>(userData);
    const confirm = (_id:any) => {
        removeUser(_id)
            .then(() => {
                // Sau khi xóa thành công, cập nhật state bằng cách loại bỏ người dùng đã xóa
                setUserList(prevUserList => prevUserList.filter(user => user._id !== _id));
            })
            .catch(error => {
                console.error("Error deleting user:", error);
            });
    };

    const dataSource = userList?.map(({ _id, username, phone, address, iphone, loanAmount }:any) => ({
        key:_id,
        username,
        phone,
        address,
        iphone,
        loanAmount
    }));

    const columns = [
        {
            title: "Username",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Dòng IPhone",
            dataIndex: "iphone",
            key: "iphone",
        },
        {
            title: "Số tiền vay",
            dataIndex: "loanAmount",
            key: "loanAmount",
        },
        {
            title: "Action",
            render: ({ key }:any) => (
                <div className="d-flex">
                    <Popconfirm title="Are you sure?" onConfirm={() => confirm(key)} okText="Yes" cancelText="No">
                        <Button type="primary" danger className="me-2">
                            Delete
                        </Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    return (
        <div>
            <header className="mb-4 d-flex justify-content-between align-items-center">
                <h2 className="font-weight-bold text-2xl">User Manager</h2>
            </header>
            {isRemoveSuccess && <Alert message="Success Text" type="success" />}
            {isLoading ? <Skeleton /> : <Table dataSource={dataSource} columns={columns} />}
        </div>
    );
};

export default AdminUser;

import React from "react";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Col, Row, Menu,  Button, Checkbox, Form, Input } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {

  const navigate = useNavigate()

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }


  

  const userInfo = useSelector(state => state.user.value)

  // console.log(userInfo.role);


  const items = [


    userInfo.role != "User" &&
    getItem("Users", "sub1", <MailOutlined />, [
      getItem("Add User", "1"),
      getItem("View User", "2"),
    ]),
    
    userInfo.role !=  "User" &&
    getItem("Product", "sub2", <AppstoreOutlined />, [
      getItem("Add Product", "/dashboard/addproduct"),
      getItem("View Product", "/dashboard/viewproduct"),
    ]),
    
    userInfo.role !=  "User" &&
    getItem("Category", "sub3", <SettingOutlined />, [
      getItem("Add Category", "/dashboard/addcategory"),
      getItem("View Category", "/dashboard/viewcategory"),
      getItem("Add Subcategory", "/dashboard/addsubcategory"),
      getItem("View Subcategory", "/dashboard/viewsubcategory"),
    ]),
    
    userInfo.role !=  "User" &&
    getItem("Discount", "sub4", <SettingOutlined />, [
      getItem("Add Discount", "9"),
      getItem("View Discount", "10"),
      getItem("Add Subcategory", "11"),
      getItem("View Subcategory", "12"),
    ]),
    userInfo.role ==  "User" &&
    getItem("My Profile", "sub5", <SettingOutlined />, [
      getItem("Purchase Details", "13"),
      getItem("Profile", "14"),
    ]),
  ];


 
  const onClick = (e) => {
    navigate(e.key)
  };


  return (
    <Row gutter={15}>
      <Col span={6}>
        <Menu
          onClick={onClick}
          style={{
            width: 256,
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Col>
      <Col span={18}>
      <Outlet/>
      </Col>
    </Row>
  );
};

export default Dashboard;

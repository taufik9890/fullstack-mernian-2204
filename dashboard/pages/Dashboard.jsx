import React from "react";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Col, Row, Menu,  Button, Checkbox, Form, Input } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

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
  const items = [
    getItem("Users", "sub1", <MailOutlined />, [
      getItem("Add User", "1"),
      getItem("View User", "2"),
    ]),
    {
      type: "divider",
    },
    getItem("Product", "sub2", <AppstoreOutlined />, [
      getItem("Add Product", "3"),
      getItem("VIew Product", "4"),
    ]),
    {
      type: "divider",
    },
    getItem("Category", "sub3", <SettingOutlined />, [
      getItem("Add Category", "/dashboard/addcategory"),
      getItem("View Category", "6"),
      getItem("Add Subcategory", "7"),
      getItem("View Subcategory", "8"),
    ]),
    getItem("Discount", "sub4", <SettingOutlined />, [
      getItem("Add Discount", "9"),
      getItem("View Discount", "10"),
      getItem("Add Subcategory", "11"),
      getItem("View Subcategory", "12"),
    ]),
    getItem(
      "Group",
      "grp",
      null,
      [getItem("Option 13", "13"), getItem("Option 14", "14")],
      "group"
    ),
  ];

  const onClick = (e) => {
    console.log("click ", e);
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

import React from "react";
import {
  BarChartOutlined,
  DashboardOutlined,
  ProductOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Switch} from "antd";
import { Link, useNavigate } from "react-router-dom";

interface AppSiderProps {
  collapsed: boolean;
}

export const AppSider: React.FC<AppSiderProps> = ({ collapsed }) => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="fixed! h-screen left-0 top-0 bg-gray-900 "
    >
      <div className="logo h-16 flex items-center justify-center bg-gray-800 text-white text-lg font-bold">
        <h1>StoreMandu</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <DashboardOutlined />,
            label: <a href="/">Dashboard</a>,
          },
          {
            key: "2",
            icon: <ProductOutlined />,
            label: <Link to="product">Products</Link>,
          },
          {
            key: "3",
            icon: <BarChartOutlined />,
            label: <Link to="analytics">Analytics</Link>,
          },
          {
            key: "4",
            icon: <LogoutOutlined />,
            label: <Link to = "#" onClick={(e) => {e.preventDefault(); handleLogout()}}>Logout</Link>,
          },
        ]}
        className="mt-4 flex flex-col justify-center"
      />
      <div className="text-white">
       <Switch defaultChecked onChange={onChange} />
       Switch Mode 
      </div>
    </Layout.Sider>
  );
};

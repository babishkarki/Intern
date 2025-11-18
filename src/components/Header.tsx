import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";

const { Header } = Layout;

interface AppHeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  collapsed,
  setCollapsed,
}) => {
  const user = localStorage.getItem("user");
  const savedUser = user ? JSON.parse(user) : null;
  return (
    <Header
      className={`sticky top-0 z-50 transition-all duration-260 flex items-center justify-between ${
        collapsed ? "ml-20" : "ml-50"
      }`}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
          color: "white",
        }}
      />
      <div className="text-white mr-4">
        <h1>Welcome {savedUser?.firstName || "Guest"}</h1>
      </div>
    </Header>
  );
};

// import { Outlet } from "react-router-dom";
// import { Layout, Menu, Dropdown, Space } from 'antd';
// import { DownOutlined} from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Link } from 'react-router-dom';

// const { Header, Content, Footer } = Layout;

// export function Layouts() {
//     const menuItems = [
//     { key: 'home', label: <Link to="/">Home</Link> },
//     { key: 'about', label: <Link to="about">About</Link> },
//     { key: 'contact', label: <Link to="contact">Contact</Link> },
//   ];
//   const dropDownItems: MenuProps['items'] = [
//     {key: '1', label: 'Profile',},
//     {key: '2', label: 'Settings'},
//     {key: '3', label: 'Logout'},
//   ];
//   return (
//     <Layout className="min-h-screen">
//       <Header className="bg-black w-full">
//         <div className="container mx-auto flex items-center justify-between">
//         <h1 className="text-2xl font-bold text-white">Application</h1>
//         <Menu theme="dark" mode="horizontal" items = {menuItems} className="ml-auto"/>
//         <Dropdown menu={{ items: dropDownItems }} className="ml-4">
//             <a onClick={e => e.preventDefault()}>
//             <Space className="text-white">
//                 User
//             <DownOutlined />
//             </Space>
//             </a>
//         </Dropdown>
//         </div>
//       </Header>
      
//       <Content className="container h-[81vh] p-4 text-center flex-grow">
//         <Outlet />
//       </Content>
      
//       <Footer className="text-center">
//         ©2025 Intern. All rights reserved.
//       </Footer>
//     </Layout>
//   );
// }

import React from "react";
import { Layout } from "antd";
import { AppHeader } from "./Header";
import { AppSider } from "./Sider";
import { Footer } from "./Footer";
import { Content } from "./Content";


export function Layouts() {
    const [collapsed, setCollapsed] = React.useState(false);
    return (
        <Layout>
            <AppSider collapsed={collapsed} />
            <Layout>
                <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content />
                <Footer/>
            </Layout>
        </Layout>
    );
}


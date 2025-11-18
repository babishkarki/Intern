import { Layout } from "antd";
import { Outlet } from "react-router-dom";

export const Content = () => {
    return (
        <Layout.Content className="ml-64"> 
            <Outlet />
        </Layout.Content>
    );
}
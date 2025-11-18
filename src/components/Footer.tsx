import { Layout} from "antd";

export const Footer = () => {
    return (
        <Layout.Footer className="text-center">
            <p>© {new Date().getFullYear()} StoreMandu. All rights reserved.</p>
        </Layout.Footer>
    );
}
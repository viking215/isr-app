import { Layout, Menu } from "antd";
import Link from "next/link";
import styled from "styled-components";

const { Header } = Layout;

const routes = [
    { label: "Home", link: "/", key: "1" },
    { label: "Tasks", link: "/tasks", key: "2" },
    { label: "Users", link: "/users", key: "3" },
];

const MainHeader = () => {
    //const router = useRouter();

    //const getDefaultSelectedKey = () => {
    //return routes.find((r) => router.pathname.includes(r.link))?.key;

    const CustomHeader = styled(Header)`
        height: 100%;
    `

    return (
        <CustomHeader>
            <div/>
            <Menu
                theme="dark"
                mode="horizontal"
                /*selectedKeys={['1']}*/
            >
                {routes.map((tab, index) => (
                    <Menu.Item key={tab.key}>
                        <Link href={tab.link}>
                            <a>{tab.label}</a>
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
        </CustomHeader>
    );
}

export default MainHeader

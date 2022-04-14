import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { FC } from "react";
import { Link } from "react-router-dom";

export const MENU = [
  {
    text: "HOME",
    path: "/",
  },
  {
    text: "MATCHES",
    path: "/matches",
  },
];

const AppBar: FC = () => (
  <Header>
    <Menu theme="dark" mode="horizontal">
      {MENU.map((item) => (
        <Menu.Item key={item.path}>
          <Link to={item.path} key={item.path}>
            {item.text}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  </Header>
);

export default AppBar;

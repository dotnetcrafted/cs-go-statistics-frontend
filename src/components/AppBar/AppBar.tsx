import { FC } from "react";
import { Link } from "react-router-dom";

export const MENU = [
  {
    text: "Главная",
    path: "/",
  },
  {
    text: "Wiki",
    path: "/wiki",
  },
];

const AppBar: FC = () => (
  <header>
    {MENU.map((i) => (
      <Link to={i.path} key={i.path}>
        {i.text}
      </Link>
    ))}
  </header>
);

export default AppBar;

import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  const [isClosed, setIsClosed] = useState(true);
  const sideNavHandler = () => {
    setIsClosed(!isClosed);
  };
  return (
    <div className="header">
      <h3 onClick={sideNavHandler}>MENU</h3>
      <Logo />
      <img src="/images/dp.jpg" alt="" className="dpImage" />
      <Menu isClosed={isClosed} />
    </div>
  );
}

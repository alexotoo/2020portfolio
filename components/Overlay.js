import clsx from "clsx";

export default function Overlay({ isClosed, sideNavHandler }) {
  let sidenavToggle = clsx("overlay", isClosed && "isClosed");

  return <div className={sidenavToggle} onClick={sideNavHandler}></div>;
}

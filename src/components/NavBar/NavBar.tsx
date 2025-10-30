import "./NavBar.scss";
import { Sparkle } from "lucide-react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Sparkle size={20} fill="#000000" />
        <span>Principles</span>
      </div>
    </div>
  );
};

export default NavBar;

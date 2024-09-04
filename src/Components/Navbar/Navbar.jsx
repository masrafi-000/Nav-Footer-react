import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import bag from "../../assets/bag.svg";
import heart from "../../assets/heart.svg";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <a href="">New</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">Kids</a>
          </li>
          <li>
            <a href="">Jordan</a>
          </li>
          <li>
            <a href="">Sale</a>
          </li>
        </ul>
        <div className="cart">
          <img src={search} alt="" />
          <img src={heart} alt="" />
          <img src={bag} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

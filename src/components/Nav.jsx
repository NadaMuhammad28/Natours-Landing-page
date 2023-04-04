import logo from "/logo1.png";
import { FaBars } from "react-icons/fa";
import { styled } from "@mui/system";
import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react";
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const navClass = scrolled ? "nav-bg-2" : "nav-bg-1";
  const { toggleNav } = useGlobalContext();
  const handleScroll = () => {
    window.scrollY > 90 ? setScrolled(true) : setScrolled(false);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <Wrapper className={navClass}>
      <div className="container d-flex-space">
        <img className="logo" src={logo} alt="natours logo" />
        <button onClick={toggleNav}>
          <FaBars />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("nav")`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.4rem 0;
  right: 0;

  // img {
  //   object-fit: cover;
  z-index: 100;

  //   width: 5rem;
  // }
  button {
    background: transparent !important;
    color: #fff;
    z-index: 100;
    font-size: 2rem;
  }

  // @media (max-width: 500px) {
  //   img {
  //     width: 3.5rem;
  //   }
  // }
`;

export default Nav;

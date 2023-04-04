import { styled } from "@mui/system";
import { useGlobalContext } from "../context/GlobalContext";
import { menu } from "../utils/constants";

const NavMenu = () => {
  const { toggleNav } = useGlobalContext();
  return (
    <Wrapper>
      <div
        className="container d-flex-center-col "
        style={{ width: "100%", height: "100%" }}
      >
        <div className="link-container">
          {menu.map((link) => {
            return (
              <a key={link.id} href={link.to} onClick={toggleNav}>
                {link.name}{" "}
              </a>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled("main")`
  background: radial-gradient(#7ed567, #28b485);
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;

  left: 0;
  .link-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  a {
    text-transform: uppercase;
    padding: 0.3rem;
    letter-spacing: 0.3rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    transform-origin: right;
    transition: 0.5s all ease-in-out;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      transparent 50%
    );
    bacground-repeat: no-repeat;
  }
  a:hover,
  a:active {
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      #fff 50%
    );
    background-position: 100%;
    background-size: 300%;
    color: var(--bg-primary);
  }
`;
export default NavMenu;

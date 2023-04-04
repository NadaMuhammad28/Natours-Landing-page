import { styled } from "@mui/system";
import Nav from "./Nav";

const Hero = () => {
  return (
    <Wrapper className="d-flex-center-col">
      {/* <Nav /> */}
      <div className="container d-flex-center-col">
        <h1>outdoors</h1>
        <h5>is where life happens</h5>
        <button className="btn">dicover our tours</button>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled("header")`
  position: relative;
  background-image: var(--linear-grad), url(/hero-intro.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-clr-primary);
  clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
  height: 100vh;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  h1 {
    letter-spacing: 1rem;
  }
  h5 {
    letter-spacing: 1.02rem;
  }

  button {
    background-color: var(--bg-primary);
  }

  div {
    gap: 1rem;
  }

  @media (max-width: 700px) {
    h5 {
      letter-spacing: 0.8rem;
    }
  }
`;

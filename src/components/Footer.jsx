import { styled } from "@mui/system";
import logo from "/logo-2.png";
import { links } from "../utils/constants";
const Footer = () => {
  return (
    <Wrapper className="section">
      <div className="container center">
        <img className="logo" src={logo} alt="logo" />
        <ul>
          {links.map((l) => {
            return (
              <a href={l.link} key={l.id}>
                <li>{l.title}</li>
              </a>
            );
          })}
        </ul>
      </div>
      <div className="copy">
        <span>&copy; {new Date().getFullYear()} All rights reserved</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("footer")`
  background: var(--footer);
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  ul{
    flex-wrap:wrap;
    justify-content:center;
  }
  li{padding:.4rem .2rem;}
a{
  color: #f1f1f1;
    transition: all 0.3s ease-in-out;
}
  a:hover{
    color: var( --bg-primary);
    box-shadow: 0 4px 2px -2px var( --bg-primary);
}
  }

  @media (max-width:609px){
    .center{
      flex-direction:column;
    }
  }
  .copy{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 4rem;
  }
  span{
    text-align:center;
   
    text-transform:capitalize;
  }
`;
export default Footer;

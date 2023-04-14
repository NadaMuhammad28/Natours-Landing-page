import { styled } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2";

import { prices } from "../utils//constants";

const Pricing = () => {
  return (
    <Wrapper className="section" id="tours">
      <div className="container">
        <h2 className="head-title p-title" data-aos="fade-up">
          most popular tours
        </h2>
        <Grid2 container justifyContent="center" spacing={4}>
          {prices.map((card) => {
            return (
              <Grid2
                item
                xs={12}
                md={6}
                lg={4}
                key={card.id}
                alignSelf="center"
              >
                <article
                  className="flip-card"
                  data-aos="fade-up"
                  data-aos-delay={`${card.id * 100}`}
                >
                  <div className="flip-card-inner">
                    {/*  */}
                    <div className="flip-card-front">
                      <header style={{ backgroundImage: card.bgimg }}></header>

                      <ul>
                        <h4
                          className="title"
                          style={{ backgroundImage: card.bgtxt }}
                        >
                          {card.title}
                        </h4>
                        <li>{card.i1}</li>
                        <hr />
                        <li>{card.i2}</li>
                        <hr />
                        <li>{card.i3}</li>
                        <hr />
                        <li>{card.i4}</li>
                        <hr />
                        <li>{card.i5}</li>
                      </ul>
                    </div>

                    {/*  */}
                    <div
                      className="flip-card-back"
                      style={{ backgroundImage: card.bgback }}
                    >
                      <div className="price-info d-flex-center-col">
                        <span> only </span>
                        <small className="price">{card.price} </small>
                        <a
                          className="btn"
                          href="#"
                          style={{
                            backgroundColor: "#fff",
                            color: card.txtback,
                          }}
                        >
                          buy now{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </Grid2>
            );
          })}
        </Grid2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("section")`
  overflow: hidden;
  background: var(--bg-primary-1);
  text-align: center;
  // front
  header {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50%;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  }

  .title {
    font-weight: lighter;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    position: absolute;
    right: 0;
    -webkit-box-decoration-break: clone;
    top: -5rem;
//     z-index: 2;
    width: 45%;
    padding-right: 1.5rem;
  }

  ul {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  hr {
    width: 75%;
    margin: auto;
  }
  li {
    display: block;
    padding: 1rem 3rem;
  }

  //back

  .price-info {
    width: 100%;
    height: 100%;
    gap: 6rem;
    color: #fff;
    // justify-content: space-between !important;
  }

  span {
    font-size: 1.4rem;
    font-weight: 100;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }
  .price {
    font-weight: 100 !important;

    font-size: 5rem;
  }

  a {
    font-size: 1rem;
    font-weight: 600 !important;
  }
  // flip card hover

  .flip-card {
    background-color: transparent;
    width: 100%;
    height: 85vh;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    background: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    color: black;
  }

  .flip-card-back {
    text-align: center;
    transform: rotateY(180deg);
    padding: 1rem;
  }
`;

export default Pricing;

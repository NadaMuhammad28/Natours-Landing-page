import React from "react";
import { styled } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2";

import { features } from "../utils/constants";
const Features = () => {
  return (
    <Wrapper className="section" id="features">
      <div className="container">
        <Grid2
          container
          spacing={4}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {features.map((card) => {
            const { id, title, Icon, p } = card;
            return (
              <Grid2 item xs={12} sm={6} md={4} alignSelf="center" key={id}>
                <article
                  className="card d-flex-center-col "
                  data-aos="fade-up"
                  data-aos-delay={`${card.id * 100}`}
                >
                  <Icon />
                  <h3>{title}</h3>
                  <p>{p}</p>
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
  background-image: var(--linear-grad), url(/features.jpg);
  clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%);
  min-height: 70vh;
  overflow: hidden;

  .card {
    // min-heigth: 25rem;
    // max-height: 25rem;
    background-color: rgba(255, 255, 255, 0.8);
    color: var(--bg-primary);
    transition: 0.4s all ease-in-out;
    transition-delay: 0.2s;
    padding: 2rem 3rem;
    gap: 0.8rem;
    border-radius: 1rem;
    svg {
      font-size: 2.8rem;
    }
    p,
    h3 {
      text-align: center;
    }
  }
  .card:hover,
  .car:active {
    transform: translateY(-4%);
  }
  @media (max-width: 440px) {
    min-height: 130vh;
  }
`;
export default Features;

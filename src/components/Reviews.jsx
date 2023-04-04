import { styled } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2";
import { reviews } from "../utils/constants";

const Reviews = () => {
  return (
    <Wrapper className="section section-center " id="feedback">
      <div className="container">
        <h2 className="p-title head-title" data-aos="fade-up">
          We Make People Happy
        </h2>
        <Grid2
          spacing={0}
          container
          spacing={{ xs: 3, lg: 4, xl: 5 }}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {reviews.map((card) => {
            const { id, name, img, p, title } = card;
            return (
              <Grid2 item xs={12} lg={6} alignSelf="center" key={id}>
                <article
                  className="card"
                  data-aos={id == 1 ? "fade-right" : "fade-left"}
                  data-aos-delay={`${id * 2}`}
                >
                  <figure>
                    <img src={img} alt="name" />
                    <figcaption>
                      <span>{name}</span>
                    </figcaption>
                  </figure>

                  <div className="content">
                    <h4>{title}</h4>
                    <p>{p}</p>
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
  text-align: center;
  background: #fff;
  .card {
    padding: 2rem 3rem;
    box-shadow: rgba(0, 0, 0, 0.54) 0px 3px 8px;
    gap: 1rem;
    border-radius: 1rem;
    text-align: left;
    transform: skewX(-5deg);
    display: flex; /* add display flex */
    flex-direction: row; /* set flex direction to row */
    align-items: center; /* center the items vertically */
  }
  img {
    transition: all ease-in-out 0.3s;
    transform: scale(1.1);
  }

  figcaption {
    transition-delay: 0.2s;
  }
  figcaption,
  img {
    transition: all ease-in-out 0.3s;
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 50%;
    display: inline-block;
    // flex: 0 0 auto; /* set flex to 0 0 auto to maintain original size */
  }
  figure {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 50%;
  }
  .content {
    display: inline-block;
    gap: 0.3rem;

    flex: 1; /* set flex to 1 to fill remaining space */
  }
  figure {
    position: relative;
    overflow: hidden !important;
  }
  figcaption {
    opacity: 0;
    display: none;
    color: #fff;
  }
  article:hover img {
    transform: scale(1);
    filter: blur(3px) brightness(50%);
  }
  article:hover figcaption,
  article:active figcaption {
    position: absolute;
    top: 0;
    opacity: 1;
    text-transform: capitalize;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgba(0, 0, 0, 0.4);
    font-size: 1.1rem;
    color: #fff;
    overflow: hidden;
  }

  @media (max-width: 1200px) {
    .card {
      transform: skewX(0deg);
    }
  }
  @media (max-width: 610px) {
    .card {
      flex-direction: column;
    }
    p {
      // text-align: center;
    }
  }
`;
export default Reviews;

import img from "/about.jpg";
import Grid2 from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/system";
const About = () => {
  return (
    <Wrapper className="section" id="about">
      <div className="container d-flex-center-col" style={{ gap: "2rem" }}>
        <h2 className="head-title p-title">
          Exciting Tours For Adventurous Peopel
        </h2>
        <div>
          <Grid2
            container
            flexDirection={{ xs: "column-reverse", md: "row" }}
            spacing={2}
          >
            <Grid2 item xs={12} md={6} lg={8}>
              <article className="d-flex-center-col">
                <div className="content">
                  <h3>You're Going To Fall In Love With Nature</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quisquam veniam cupiditate et fugit corrupti. Tempore,
                    neque. Veniam inventore dolore ratione?
                  </p>
                </div>
                <div className="content">
                  <h3>
                    You're Going To Fall In Love With Live Adventure Like You
                    Never Have Before.
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quisquam veniam cupiditate et fugit corrupti. Tempore,
                    neque. Veniam inventore dolore ratione?
                  </p>
                </div>
                <a className="btn2" href="#">
                  {" "}
                  learn more ⇒
                </a>
              </article>
            </Grid2>
            {/* IMG */}
            <Grid2 item xs={12} md={6} lg={4} alignSelf="center">
              <div
                style={{ width: "100%", display: "flex", alignItems: "center" }}
              >
                <img src={img} alt="about adventures" />
              </div>
            </Grid2>
          </Grid2>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("section")`
  background: var(--bg-primary-1);
  text-align: center;
  article {
    text-align: left;
    align-items: flex-start;
    gap: 2rem;
  }
  h3 {
    width: 80%;
  }
  p {
    width: 60%;
  }
  img {
    width: 100%;
    vertical-align: middle;
    object-fit: cover;
  }
  @media (max-width: 1200px) {
    h3 {
      width: 80%;
    }

    p {
      width: 90%;
    }
  }
  @media (max-width: 900px) {
    h3,
    p {
      width: 100%;
    }

    a {
      align-self: center;
    }
  }
  .content {
    display: flex;
    gap: 0.3rem;
    flex-direction: column;
  }
`;
export default About;

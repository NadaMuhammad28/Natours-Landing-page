import Grid2 from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/system";
const From = () => {
  return (
    <Wrapper className="section" id="book">
      <div className="container d-flex-center-col">
        <form className="form" data-aos="fade-up">
          <h2 className="head-title">Start booking now</h2>
          <div className="form-inputs">
            {/*  */}
            <div className="personal-info">
              <input
                className="text-input"
                type="text"
                placeholder="Full Name"
              />
              <input className="text-input" type="email" placeholder="Email" />
            </div>
            {/*  */}

            <div>
              <div className="group-btn">
                {" "}
                <input
                  className="radio-input"
                  type="radio"
                  id="smallgroup"
                  name="group"
                />
                <label htmlFor="smallgroup">Small tour group</label>
              </div>
              <div className="group-btn">
                {" "}
                <input
                  className="radio-input"
                  type="radio"
                  id="smallgroup"
                  name="group"
                />
                <label htmlFor="largegroup">large tour group</label>
              </div>
            </div>
            <a className="btn submit" href="#">
              Next Step{" "}
            </a>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("section")`
  overflow: hidden;
  background: var(--linear-grad);

  div .form {
    width: 100%;
    min-height: 65vh;
    border-radius: 1rem;
    padding: 2rem 3rem;
    box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        transparent 50%
      ),
      url(/form.jpg);
  }
  .form-inputs {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 49%;
    justify-content: 1rem;
    gap: 0.7rem;
  }

  .personal-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 40%;
  }
  .group-btn {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
    color: var(--bg-primary);
    font-weight: 900;
    text-transform: capitalize;
    font-size: 1.1rem;
  }
  .submit {
    background: var(--bg-primary);
    color: #fff;
    max-width: 10rem;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
  @media (max-width: 687px) {
    div .form {
      background-image: linear-gradient(
          120deg,
          rgba(255, 255, 255, 0.9),
          rgba(255, 255, 255, 0.7)
        ),
        url(/form.jpg);
    }

    .form-inputs {
      width: 100%;
      align-items: center;
    }
  }
`;
export default From;

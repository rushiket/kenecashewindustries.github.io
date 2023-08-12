import React from "react";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <footer>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5 ">
            <MDBRow className="mt-3">
              <MDBCol
                md="3"
                lg="4"
                xl="3"
                className="mx-auto mb-4 custom-card "
              >
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  Kene Cashew Industries
                </h6>
                <p>Organic Cashew doesn't get any better.</p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/Grade" className="text-reset">
                    Grade
                  </a>
                </p>
                <p>
                  <a href="/About" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="/Contact" className="text-reset">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  <br />
                  Kene Cashew Nut Processing Unit, Bhingaloli, Samarth Nagar,
                  Mandangad, Ratnagiri,
                  <br /> Maharashtra, 415203
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  info@kenecashewindustries.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" />
                  (Monday to Saturday 9:00 AM to 5:30 PM IST)
                  <br />
                  +91 9673862975
                  <br />
                  +91 7020435089
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Kene Cashew Industries
          </a>
        </div>
      </MDBFooter>
    </footer>
  );
}

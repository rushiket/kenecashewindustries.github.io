import React from "react";
import Background from "./Background3.jpg";

import { MDBContainer } from "mdb-react-ui-kit";
export default function Contact() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src={Background} className="img-fluid shadow-4" alt="..." />
      </div>

      <MDBContainer>
        <MDBContainer fluid>
          <div className="content-container" style={{ padding: "30px" }}>
            <h1>Please contact us for more information</h1>
            <p>
            Please use the contact information below to connect with a specific department or page that can best meet your needs.
            </p>
            
          </div>
        </MDBContainer>
      </MDBContainer>
    </div>
  );
}

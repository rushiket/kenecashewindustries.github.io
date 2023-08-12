import React from 'react';

import Background from "./Background1.jpg";

import { MDBContainer } from "mdb-react-ui-kit";
export default function About() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src={Background} className="img-fluid shadow-4" alt="..." />
      </div>

      <MDBContainer>
        <MDBContainer fluid>
          <div className="content-container" style={{ padding: "30px" }}>
            <h1>AT A GLANCE</h1>
            <p>
            
            </p>
            
          </div>
        </MDBContainer>
      </MDBContainer>
    </div>
  );
}
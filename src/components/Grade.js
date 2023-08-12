import React from "react";
import Background from "./Background.jpg";
import "./../index.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
export default function Grade() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src={Background} className="img-fluid shadow-4" alt="..." />
      </div>

      <MDBContainer>
        <MDBContainer fluid>
          <div className="content-container" style={{ padding: "30px" }}>
            <h1>CASHEW GRADES</h1>
            <p>
              The selection of a particular cashew grade can vary the sensory
              properties and application potential of the finished product.
            </p>
            <h2>White Wholes</h2>
            <p>
              The most popular grades for various applications where visual
              appeal and taste are critical.
            </p>
          </div>
        </MDBContainer>
        <MDBRow
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ padding: "30px" }}
        >
          <MDBCol>
            <MDBCard className="h-100" style={{ padding: "30px" }}>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody className="custom-card">
                <MDBCardTitle >
                  <h3>White Wholes<br /> 180</h3>
</MDBCardTitle>
                <MDBCardText >
                  <p>The highest grade in terms of size. Ideal for applications where visual appeal and size of the cashew nut is critical to the application. Contains approximately 160 - 180 nuts per lbs.</p>
                  <p>Major origins of this nut are Ghana, Ivory Coast and Tanzania.</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100" style={{ padding: "30px" }}>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody className="custom-card">
                <MDBCardTitle><h3>White Wholes<br /> 240</h3></MDBCardTitle>
                <MDBCardText>
                  <p>Large size nuts - typically appropriate for product or application where visual appeal and size of the nut is important. Contains approximately 220 - 240 nuts per lbs.</p>
                  <p>Major Origins include Ghana, Ivory Coast and Tanzania.</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100" style={{ padding: "30px" }}>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody className="custom-card">
                <MDBCardTitle><h3>White Wholes <br /> 320</h3></MDBCardTitle>
                <MDBCardText>
                  <p>Mid size nuts and also the most popular cashew grade. Ideal for all kinds of food applications, both direct and formulations. Contains approximately 300 - 320 nuts per lbs.</p>
                  <p>All of our Origins contribute equally to this grade.</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100" style={{ padding: "30px" }}>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody className="custom-card">
                <MDBCardTitle><h3>White Wholes <br /> 450</h3></MDBCardTitle>
                <MDBCardText>
                 <p>The smallest size amongst White Whole cashew grades. Ideal for product applications where visual appeal is important but size is not a factor. Contains approximately 440-450 nuts per lbs.</p>
                 <p>Origins that contribute majority to this grade are Guinea Bissau and Senegal.</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          
        </MDBRow>

        <MDBContainer fluid>
          <div className="content-container" style={{ padding: "30px" }}>
            <h2>Cashew Forms</h2>
            <p>
              Splits or Pieces—our cashews are always in good form for your
              application and are easy to work with from a formulation
              perspective.
            </p>
          </div>
        </MDBContainer>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard className="h-100 custom-card" style={{ padding: "30px" }}>
              <MDBCardImage
                className="custom-card"
                src="https://mdbootstrap.com/img/new/standard/city/047.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody className="custom-card">
                <MDBCardTitle><h3>White <br />Splits</h3></MDBCardTitle>
                <MDBCardText><p>
                Whole cashew split into halves. Contains approximately 350-360 pieces per 250 Grams. Typically used as key ingredient and for topping and coating.
                </p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100" style={{ padding: "30px" }}>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/048.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody className="custom-card">
                <MDBCardTitle><h3>Large White <br />Pieces</h3></MDBCardTitle>
                <MDBCardText><p>Whole cashew diced into four pieces. 
                  Origins determine the size of the pieces. 
                  Typically used as a key ingredient and for topping, coating and garnishing.
                  </p></MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100" style={{ padding: "30px" }}>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/049.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody className="custom-card">
                <MDBCardTitle><h3>Small Scorched <br />Pieces</h3></MDBCardTitle>
                <MDBCardText><p>
                Scorched variety of Small White Pieces. Typically used for further processing where visual appeal is not important.
                </p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

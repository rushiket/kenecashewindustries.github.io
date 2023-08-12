import React from 'react';
import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";
import slider4 from "./slider4.jpg";
import {
    MDBCarousel,
    MDBCarouselItem,
  } from "mdb-react-ui-kit";
export default function HomeScreen() {
  return (
    <div >
    <MDBCarousel 
    showControls
    fade
    auto={true.toString()}
    slideinterval={3000}
  >
    <MDBCarouselItem
      className="w-100 d-block"
      itemId={1}
      src={slider1}
      alt="..."
    />
    <MDBCarouselItem
      className="w-100 d-block"
      itemId={2}
      src={slider2}
      alt="..."
    />
    <MDBCarouselItem
      className="w-100 d-block"
      itemId={3}
      src={slider3}
      alt="..."
    />
    <MDBCarouselItem
      className="w-100 d-block"
      itemId={4}
      src={slider4}
      alt="..."
    />
  </MDBCarousel>
    <div class="main-container"  style={{ padding: '90px' }}>
    <div
      class="sqs-block html-block sqs-block-html"
      data-block-type="2"
      id="1"
    >
      <div class="sqs-block-content" >
        <div class="sqs-html-content" style={{ padding: '20px' }}>
          <h1>Cashew Industries is one of the leading procurer, processor and exporter of Cashew Nuts from India.</h1>
          <p>
            We are a prominent procurer, processor, and exporter of
            high-quality Cashew Nuts from India. With a strong presence in
            all stages of the cashew value chain, we source from 6 origins
            in Africa and process in 13 facilities across India.
          </p>
          <p>
            Our commitment to excellence has earned us recognition from
            esteemed institutions like the Cochin Chamber of Commerce,
            where we rank among the top 10 cashew shippers from India.
          </p>
          <p>
            We take pride in delivering finest quality, fully traceable
            cashew kernels that are sustainably sourced and responsibly
            processed, catering to diverse customers in over 43 countries.
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}
import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

function Header({ prop }) {
  if (!prop) {
    return <p>Loading...</p>;
  }
  console.log(prop);
  return (
    <div>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol className="mt-5">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: "180px", borderRadius: "10px" }}
                      src={prop.pppic}
                      alt="Generic placeholder image"
                      fluid
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardText>{prop.fullname}</MDBCardText>

                    <div
                      className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: "#efefef" }}
                    >
                      <div>
                        <p className="small text-muted mb-1">bestTimeR</p>
                        <p className="mb-0">{prop.bestTimeR}</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">bestTimeS</p>
                        <p className="mb-0">{prop.bestTimeS}</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">bestTimeC</p>
                        <p className="mb-0">{prop.bestTimeC}</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1"></div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Header;

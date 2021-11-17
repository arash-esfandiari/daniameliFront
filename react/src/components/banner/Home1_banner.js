import React, { Component } from "react";
import { MDBAnimation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow } from
    "mdbreact";


export class CarouselPage extends Component {
    render() {
        const headerStyle = {
            backgroundColor: 'grey',
            padding: '10px',
            border: '1px solid black',
            borderRadius: '15px'
        };
        const paragraphStyle = {
            color: 'white',
        };

        return (
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCarousel
                        activeItem={1}
                        length={2}
                        showControls={true}
                        showIndicators={false}
                        id="Home_banner"
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img className="d-block w-100" src="images/home-bg.jpg" alt="First slide" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <div className="container-xl">
                                        <div className="carousel-caption-inner banner1">
                                            <MDBAnimation className="slideInUp" count={1} delay="2s" >
                                                <h2 style={headerStyle} className="ttm-textcolor-darkgrey flipInY">Industry Leadering <strong className="ttm-textcolor-skincolor">Induction</strong> Furnaces and Machinery</h2>
                                            </MDBAnimation>
                                            <MDBAnimation className="slideInUp" count={1} delay="2.5s" >
                                                <p style={paragraphStyle} className="text">We are equipped with an updated technical knowledge to serve our customers<br /> properly. Our method of application maintains the industry.</p>
                                            </MDBAnimation>
                                            <MDBAnimation className="slideInUp" count={1} delay="3s" >
                                                <p>
                                                    <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white">Discuss Your Project </button>&nbsp; &nbsp;
                                                </p>
                                            </MDBAnimation>
                                        </div>
                                    </div>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img className="d-block w-100" src="images/ref-standard.jpg" alt="Second slide" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <div className="container-xl">
                                        <div className="carousel-caption-inner banner2">
                                            <MDBAnimation className="slideInUp" count={1} delay="5s" >
                                                <h2 style={headerStyle} className="ttm-textcolor-darkgrey">More than <strong className="ttm-textcolor-skincolor">7,000</strong> Reference Standards</h2>
                                            </MDBAnimation>
                                            <MDBAnimation className="slideInUp" count={1} delay="5.5s" >
                                                <p style={paragraphStyle} className="text">We are equipped with an updated technical knowledge to serve our customers<br /> properly. Our method of application maintains the industry.</p>
                                            </MDBAnimation>
                                            <MDBAnimation className="slideInUp" count={1} delay="6s" >
                                                <p>
                                                    <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white mr-3">read more</button>
                                                </p>
                                            </MDBAnimation>
                                        </div>
                                    </div>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default CarouselPage;
import React, { lazy, Suspense, useEffect, useState } from "react";
import "./Sponsors24.css";
import { useDataContext } from "../../contexts/DataProvider";
import { FadeIn } from "react-slide-fade-in/dist/fade-in";
import ethindia from "../../assets/ethindia.png";
import devfolio from "../../assets/devfolio.svg";
import polygon from "../../assets/polygon-logo-colored.svg";
import echo3d from "../../assets/echo3d.png";
import SSCS from "../../assets/SSCS.jpeg";
import CAS from "../../assets/CAS.jpeg";
import Wie from "../../assets/Wie.jpeg";
import ISTE from "../../assets/ISTE.jpeg";
import Aspecta from "../../assets/Black2.png";
import GOVTLOGO from "../../assets/govt-logo.jpeg";

const Circle = lazy(() => import("../../components/Blob/Circle"));

const Sponsors24: React.FC = () => {
  const { getSponsors } = useDataContext();
  const [sponsorList, setSponsorList] = useState<any>();

  useEffect(() => {
    async function fetchSponsorDetails() {
      const sponsors = await getSponsors();
      sponsors.sort((a: any, b: any) => a.orderNo - b.orderNo);
      setSponsorList([...sponsors]);
    }
    fetchSponsorDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container pt-5 pb-5 position-relative">
        <Suspense fallback={<></>}>
          <Circle
            width="600px"
            height="600px"
            blur="80"
            top="1300px"
            right="-400px"
            color="blue"
          />
          <Circle
            width="600px"
            height="600px"
            blur="80"
            top="1800px"
            left="-400px"
            color="orange"
          />
          <Circle
            width="900px"
            height="900px"
            blur="0"
            top="-25px"
            right="-450px"
            color="orange"
            bannerCircle="banner_circle"
          />
          <Circle
            width="900px"
            height="900px"
            blur="0"
            top="-25px"
            left="-450px"
            color="blue"
            bannerCircle="banner_circle"
          />
          <Circle
            width="600px"
            height="600px"
            blur="80"
            top="1300px"
            right="-400px"
            color="blue"
          />
          <Circle
            width="600px"
            height="600px"
            blur="80"
            top="1800px"
            left="-400px"
            color="orange"
          />
          <Circle
            width="900px"
            height="900px"
            blur="0"
            top="-25px"
            right="-450px"
            color="orange"
            bannerCircle="banner_circle"
          />
          <Circle
            width="900px"
            height="900px"
            blur="0"
            top="-25px"
            left="-450px"
            color="blue"
            bannerCircle="banner_circle"
          />
        </Suspense>

        <FadeIn
          from="bottom"
          positionOffset={200}
          triggerOffset={0}
          delayInMilliseconds={100}
        >
          <div id="govt-sponsor" className="divider">
            &nbsp;Supported By&nbsp;
          </div>
          <div className="gold-sponsor">
            <img className="sponsor-image" src={GOVTLOGO} alt="Government LOGO" style={{
                                width: "450px",
                                height: "450px",
                              }}/>
          </div>
          
          <div id="gold-sponsor" className="divider">
            &nbsp;Gold Sponsors&nbsp;
          </div>
          <div className="gold-sponsor">
            <img className="sponsor-image" src={devfolio} alt="Devfolio LOGO" />
            <img className="sponsor-image" src={polygon} alt="Polygon LOGO" />
          </div>

          <div id="silver-sponsor" className="divider">
            &nbsp;Silver Sponsors&nbsp;
          </div>

          <div className="gold-sponsor">
            <img
              style={{ width: "210px" }}
              src={ethindia}
              alt="ETHINDIA LOGO"
            />
             <img
              style={{ width: "210px" }}
              src={Aspecta}
              alt="ETHINDIA LOGO"
            />
          </div>

          <div id="technical-sponsor" className="divider">
            &nbsp;Technical Sponsors&nbsp;
          </div>

          <div className="technical-sponsor-group">
          

            <img className="sponsor-image" src={CAS} alt="CAS LOGO" />
            <img className="sponsor-image" src={Wie} alt="Wie LOGO" />
            <img className="sponsor-image" src={ISTE} alt="ISTE LOGO" />

            <img
              className="sponsor-image"
              src={"https://i.imgur.com/HKy5afa.jpg"}
              alt="Computer_Society LOGO"
            />
         
            <img
              className="sponsor-image"
              src={"https://i.imgur.com/2polx5l.png"}
              alt="CAS LOGO"
            />
            <img
              className="sponsor-image"
              src={"https://i.imgur.com/QbQbJP0.jpg"}
              alt="Wie LOGO"
            />
            <img
              className="sponsor-image"
              src={"https://i.imgur.com/YupfMoX.jpg"}
              alt="Robotic Society LOGO"
            />

            <img
              className="sponsor-image"
              src={"https://i.imgur.com/9i5L9es.jpg"}
              alt="Electron Device Society LOGO"
            />
         
            <img
              className="sponsor-image"
              src={"https://i.imgur.com/DFKp41C.jpg"}
              alt="IEEE"
            />
            <img
              className="sponsor-image"
              src={"https://i.imgur.com/kdyuFlQ.jpg"}
              alt="SSCS"
            />

            <img
              className="sponsor-image"
              src={"https://i.imgur.com/ZMRZvW8.png"}
              alt="WEBSOFT"
            />
          </div>

          {/* <div id="technical-sponsor" className="divider">
            &nbsp;Technical Sponsors&nbsp;
          </div>
          <div className="gold-sponsor">
            <img className="sponsor-image" src={echo3d} alt="Echo3D LOGO" />
          </div> */}

          <div id="silver-sponsor" className="divider">
            &nbsp;Media Partner&nbsp;
          </div>
          <div className="gold-sponsor">
            <img
              style={{ width: "250px" }}
              src={"https://i.postimg.cc/wx4B6fXD/Media-Partner.jpg"}
              alt="WEBSOFT"
            />
          </div>
          <div id="silver-sponsor" className="divider">
            &nbsp;Radio Partner&nbsp;
          </div>
          <div className="gold-sponsor">
            <img
              className="gold-sponsor"
              style={{ width: "250px" }}
              src={"https://i.postimg.cc/DytyGSYZ/Radio-Partner.jpg"}
              alt="WEBSOFT"
            />
          </div>
        </FadeIn>

        {/* {sponsorList &&
          sponsorList.map((sponsor: any) => {
            return (
              <div className="py-5">
                <div className="w-100 d-flex flex-row justify-content-center align-items-center">
                  <div
                    className="mx-2"
                    style={{
                      height: "1px",
                      backgroundColor: "grey",
                      width: "inherit",
                    }}
                  ></div>
                  <h3 className="text-center" style={{ width: "inherit" }}>
                    {sponsor.category}
                  </h3>
                  <div
                    className="mx-2"
                    style={{
                      height: "1px",
                      backgroundColor: "grey",
                      width: "inherit",
                    }}
                  ></div>
                </div>
                <div className="sponsor-wrapper mt-5">
                  {sponsor.category === "Tech Partner" ? (
                    <>
                      <div className="sponsor-wrapper">
                        {sponsor.images.map((image: any) => {
                          return (
                            image.society && (
                              <FadeIn
                                from="left"
                                positionOffset={150}
                                triggerOffset={25}
                                delayInMilliseconds={100}
                              >
                                <div className="sponsor-img-container">
                                  <a
                                    href={image.website}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <img
                                      className="sponsor-img"
                                      src={image.url}
                                      // style={{ width: "20rem" }}
                                      alt={image.name}
                                    />
                                  </a>
                                </div>
                              </FadeIn>
                            )
                          );
                        })}
                      </div>
                      <Marquee pauseOnHover={true} speed={80}>
                        {sponsor.images.map((image: any) => {
                          return (
                            !image.society && (
                              <FadeIn
                                from="left"
                                positionOffset={150}
                                triggerOffset={25}
                                delayInMilliseconds={100}
                              >
                                <div className="sponsor-img-container my-3 mx-3">
                                  <a
                                    href={image.website}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <img
                                      className="sponsor-img"
                                      src={image.url}
                                      // style={{ width: "20rem" }}
                                      alt={image.name}
                                    />
                                  </a>
                                </div>
                              </FadeIn>
                            )
                          );
                        })}
                      </Marquee>
                    </>
                  ) : (
                    sponsor.images.map((image: any) => {
                      return (
                        <FadeIn
                          from="left"
                          positionOffset={150}
                          triggerOffset={25}
                          delayInMilliseconds={100}
                        >
                          {sponsor.category === "Supported by" ? (
                            <div
                              className="sponsor-img-container"
                              id="supported-by"
                              style={{
                                width: "450px",
                                height: "450px",
                              }}
                            >
                              <a
                                href={image.website}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  className="sponsor-img"
                                  src={image.url}
                                  // style={{ width: "20rem" }}
                                  alt={image.name}
                                />
                              </a>
                            </div>
                          ) : (
                            <div className="sponsor-img-container">
                              <a
                                href={image.website}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  className="sponsor-img"
                                  src={image.url}
                                  // style={{ width: "20rem" }}
                                  alt={image.name}
                                />
                              </a>
                            </div>
                          )} */}
        {/* <div className="sponsor-img-container">
                            <a
                              href={image.website}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                className="sponsor-img"
                                src={image.url}
                                // style={{ width: "20rem" }}
                                alt={image.name}
                              />
                            </a>
                          </div> */}
        {/* </FadeIn>
                      );
                    })
                  )} */}
        {/* {sponsor.images.map((image: any) => {
                    return (
                      <FadeIn
                        from="left"
                        positionOffset={150}
                        triggerOffset={25}
                        delayInMilliseconds={100}
                      >
                        <img
                          className="sponsor-img"
                          src={image.url}
                          style={{ width: "20rem" }}
                          alt={image.name}
                        />
                      </FadeIn>
                    );
                  })} */}
        {/*  */}
        {/* <h1 className="poppins text-center fs-3 text-uppercase fw-semibold py-4"
          style={{color: "black"}}>COMING SOON</h1> */}
        {/* <h1
          className="w-100 text-center fw-bold mt-5 caveat"
          style={{ color: "var(--heading-color)" }}
        >
          Last Year Suppoters
        </h1> */}
        {/* {sponsorList &&
          sponsorList.map((sponsor: any) => {
            return (
              <div className="py-5">
                <div className="w-100 d-flex flex-row justify-content-center align-items-center">
                  <div
                    className="mx-2"
                    style={{
                      height: "1px",
                      backgroundColor: "grey",
                      width: "inherit",
                    }}
                  ></div>
                  <h3 className="text-center" style={{ width: "inherit" }}>
                    {sponsor.category}
                  </h3>
                  <div
                    className="mx-2"
                    style={{
                      height: "1px",
                      backgroundColor: "grey",
                      width: "inherit",
                    }}
                  ></div>
                </div>
                <div className="sponsor-wrapper mt-5">
                  {sponsor.category === "Tech Partner" ? (
                    <>
                      <div className="sponsor-wrapper">
                        {sponsor.images.map((image: any) => {
                          return (
                            image.society && (
                              <FadeIn
                                from="left"
                                positionOffset={150}
                                triggerOffset={25}
                                delayInMilliseconds={100}
                              >
                                <div className="sponsor-img-container">
                                  <a
                                    href={image.website}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <img
                                      className="sponsor-img"
                                      src={image.url}
                                  
                                      alt={image.name}
                                    />
                                  </a>
                                </div>
                              </FadeIn>
                            )
                          );
                        })}
                      </div>
                      <Marquee pauseOnHover={true} speed={80}>
                        {sponsor.images.map((image: any) => {
                          return (
                            !image.society && (
                              <FadeIn
                                from="left"
                                positionOffset={150}
                                triggerOffset={25}
                                delayInMilliseconds={100}
                              >
                                <div className="sponsor-img-container my-3 mx-3">
                                  <a
                                    href={image.website}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <img
                                      className="sponsor-img"
                                      src={image.url}
                                    
                                      alt={image.name}
                                    />
                                  </a>
                                </div>
                              </FadeIn>
                            )
                          );
                        })}
                      </Marquee>
                    </>
                  ) : (
                    sponsor.images.map((image: any) => {
                      return (
                        <FadeIn
                          from="left"
                          positionOffset={150}
                          triggerOffset={25}
                          delayInMilliseconds={100}
                        >
                          {sponsor.category === "Supported by" ? (
                            <div
                              className="sponsor-img-container"
                              id="supported-by"
                              style={{
                                width: "450px",
                                height: "450px",
                              }}
                            >
                              <a
                                href={image.website}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  className="sponsor-img"
                                  src={image.url}
                       
                                  alt={image.name}
                                />
                              </a>
                            </div>
                          ) : (
                            <div className="sponsor-img-container">
                              <a
                                href={image.website}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  className="sponsor-img"
                                  src={image.url}
                                 
                                  alt={image.name}
                                />
                              </a>
                            </div>
                          )}
                          
                        </FadeIn>
                      );
                    })
                  )}
                 
                </div>
              </div>
            );
          })} */}
      </div>
    </>
  );
};

export default Sponsors24;

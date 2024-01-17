import React, { lazy, Suspense, useEffect, useState } from "react";
import "./Sponsors24.css";
import { useDataContext } from "../../contexts/DataProvider";
import { FadeIn } from "react-slide-fade-in/dist/fade-in";
import Marquee from "react-fast-marquee";

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
        <h1
          className="w-100 text-center fw-bold mt-5 caveat"
          style={{ color: "var(--heading-color)" }}
        >
          Supporters of SBH 2024
        </h1>

        <h1
          className="w-200 text-center fw-bold mt-5 caveat"
          style={{ color: "var(--heading-color)" }}
        >
          Coming Soon ...
        </h1>
        

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
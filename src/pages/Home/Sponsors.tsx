import React, { useEffect, useState } from "react";
import "./Sponsors.css";
import { useDataContext } from "../../contexts/DataProvider";
import { FadeIn } from "react-slide-fade-in/dist/fade-in";
import Marquee from "react-fast-marquee";

const Sponsors: React.FC = () => {
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
      <div className="container pt-5 pb-5">
        <h1
          className="w-100 text-center fw-bold mt-5"
          style={{ color: "var(--heading-color)" }}
        >
          Supporters of SBH 2023
        </h1>
        {/* Sponsor Category */}
        {sponsorList &&
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
                    <Marquee pauseOnHover={true} speed={80}
                    
                    >
                      {sponsor.images.map((image: any) => {
                        return (
                          <FadeIn
                            from="left"
                            positionOffset={150}
                            triggerOffset={25}
                            delayInMilliseconds={100}
                          >
                            <div className="sponsor-img-container my-3 mx-3">
                            <img
                              className="sponsor-img"
                              src={image.url}
                              // style={{ width: "20rem" }}
                              alt={image.name}
                            />
                          </div>
                          </FadeIn>
                        );
                      })}
                    </Marquee>
                  ) : (
                    sponsor.images.map((image: any) => {
                      return (
                        <FadeIn
                          from="left"
                          positionOffset={150}
                          triggerOffset={25}
                          delayInMilliseconds={100}
                        >
                          <div className="sponsor-img-container">
                            <img
                              className="sponsor-img"
                              src={image.url}
                              // style={{ width: "20rem" }}
                              alt={image.name}
                            />
                          </div>
                        </FadeIn>
                      );
                    })
                  )}
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
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Sponsors;

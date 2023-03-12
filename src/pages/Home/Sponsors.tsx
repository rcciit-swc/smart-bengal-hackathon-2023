// import React, { lazy, Suspense, useEffect, useState } from "react";
// import "./Sponsors.css";
// import { useDataContext } from "../../contexts/DataProvider";
// import { FadeIn } from "react-slide-fade-in/dist/fade-in";
// import Marquee from "react-fast-marquee";
// import { Col, Row } from "react-bootstrap";

// const Circle = lazy(() => import("../../components/Blob/Circle"));

// const Sponsors: React.FC = () => {
//   const { getSponsors } = useDataContext();
//   const [sponsorList, setSponsorList] = useState<any>();

//   useEffect(() => {
//     async function fetchSponsorDetails() {
//       const sponsors = await getSponsors();
//       sponsors.sort((a: any, b: any) => a.orderNo - b.orderNo);
//       setSponsorList([...sponsors]);
//     }
//     fetchSponsorDetails();
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <>
//       <div className="container pt-5 pb-5 position-relative">
//         <Suspense fallback={<></>}>
//           <Circle
//             width="600px"
//             height="600px"
//             blur="80"
//             top="800px"
//             right="-500px"
//             color="orange"
//           />
//           <Circle
//             width="600px"
//             height="600px"
//             blur="80"
//             top="1500px"
//             left="-500px"
//             color="blue"
//           />
//           <Circle
//             width="600px"
//             height="600px"
//             blur="80"
//             top="2000px"
//             right="-500px"
//             color="orange"
//           />
//           <Circle
//             width="600px"
//             height="600px"
//             blur="80"
//             top="2600px"
//             left="-500px"
//             color="blue"
//           />
//         </Suspense>
//         <h1
//           className="w-100 text-center fw-bold mt-5 caveat"
//           style={{ color: "var(--heading-color)" }}
//         >
//           Supporters of SBH 2023
//         </h1>
//         <Row className="w-100 d-flex flex-row justify-content-center align-items-center">
//         {sponsorList &&
//           sponsorList.map((sponsor: any) => {
//             if(sponsor.images.length > 2) {
//               return <div className="py-5">
//               <div className="w-100 d-flex flex-row justify-content-center align-items-center">
//                 <div
//                   className="mx-2"
//                   style={{
//                     height: "1px",
//                     backgroundColor: "grey",
//                     width: "inherit",
//                   }}
//                 ></div>
//                 <h3 className="text-center" style={{ width: "inherit" }}>
//                   {sponsor.category}
//                 </h3>
//                 <div
//                   className="mx-2"
//                   style={{
//                     height: "1px",
//                     backgroundColor: "grey",
//                     width: "inherit",
//                   }}
//                 ></div>
//               </div>
//               <div className="sponsor-wrapper mt-5">
//                 {sponsor.category === "Tech Partner" ? (
//                   <Marquee pauseOnHover={true} speed={80}>
//                     {sponsor.images.map((image: any) => {
//                       return (
//                         <FadeIn
//                           from="left"
//                           positionOffset={150}
//                           triggerOffset={25}
//                           delayInMilliseconds={100}
//                         >
//                           <div className="sponsor-img-container my-3 mx-3">
//                             <a
//                               href={image.website}
//                               target="_blank"
//                               rel="noreferrer"
//                             >
//                               <img
//                                 className="sponsor-img"
//                                 src={image.url}
//                                 // style={{ width: "20rem" }}
//                                 alt={image.name}
//                               />
//                             </a>
//                           </div>
//                         </FadeIn>
//                       );
//                     })}
//                   </Marquee>
//                 ) : (
//                   sponsor.images.map((image: any) => {
//                     return (
//                       <FadeIn
//                         from="left"
//                         positionOffset={150}
//                         triggerOffset={25}
//                         delayInMilliseconds={100}
//                       >
//                         <div className="sponsor-img-container">
//                           <a
//                             href={image.website}
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             <img
//                               className="sponsor-img"
//                               src={image.url}
//                               // style={{ width: "20rem" }}
//                               alt={image.name}
//                             />
//                           </a>
//                         </div>
//                       </FadeIn>
//                     );
//                   })

//                 )}
//               </div>
//             </div>
//             }
//             else
//             return <Col xs={12} md={2}>
//                 <div className="w-100 d-flex flex-row justify-content-center align-items-center mt-5">
//               <div
//                   className="mx-2"
//                   style={{
//                     height: "1px",
//                     backgroundColor: "grey",
//                     width: "inherit",
//                   }}
//                 ></div>
//                 <h5 className="text-center" style={{ width: "inherit" }}>
//                   {sponsor.category}
//                 </h5>
//                 <div
//                   className="mx-2"
//                   style={{
//                     height: "1px",
//                     backgroundColor: "grey",
//                     width: "inherit",
//                   }}
//                 ></div>
//                 </div>
//                 <div className="sponsor-wrapper mt-3">
//                 {sponsor.images.map((image: any) => {
//                     return (
//                       <FadeIn
//                         from="left"
//                         positionOffset={150}
//                         triggerOffset={25}
//                         delayInMilliseconds={100}
//                       >
//                         <div className="sponsor-img-container">
//                           <a
//                             href={image.website}
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             <img
//                               className="sponsor-img"
//                               src={image.url}
//                               // style={{ width: "20rem" }}
//                               alt={image.name}
//                             />
//                           </a>
//                         </div>
//                       </FadeIn>
//                     );
//                   })}
//                   </div>
//               </Col>
              
            
//           })}
//           </Row>
//       </div>
//     </>
//   );
// };

// export default Sponsors;


import React, { lazy, Suspense, useEffect, useState } from "react";
import "./Sponsors.css";
import { useDataContext } from "../../contexts/DataProvider";
import { FadeIn } from "react-slide-fade-in/dist/fade-in";
import Marquee from "react-fast-marquee";

const Circle = lazy(() => import("../../components/Blob/Circle"));

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
      <div className="container pt-5 pb-5 position-relative">
        <Suspense fallback={<></>}>
          <Circle
            width="600px"
            height="600px"
            blur="80"
            top="800px"
            right="-500px"
            color="orange"
          />
          <Circle
            width="600px"
            height="600px"
            blur="80"
            top="1500px"
            left="-500px"
            color="blue"
          />
          <Circle
            width="600px"
            height="600px"
            blur="80"
            top="2000px"
            right="-500px"
            color="orange"
          />
          <Circle
            width="600px"
            height="600px"
            blur="80"
            top="2600px"
            left="-500px"
            color="blue"
          />
        </Suspense>
        <h1
          className="w-100 text-center fw-bold mt-5 caveat"
          style={{ color: "var(--heading-color)" }}
        >
          Supporters of SBH 2023
        </h1>
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
                    <Marquee pauseOnHover={true} speed={80}>
                      {sponsor.images.map((image: any) => {
                        return (
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
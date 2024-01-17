import React from 'react'
import { FadeIn } from "react-slide-fade-in/dist/fade-in";

const Supporters = () => {
  return (
    <>
     <div className="pt-5 w-100 h-100 d-flex flex-column align-items-center text-center position-relative">
      <h5
        style={{ color: `var(--heading-color)` }}
        className="caveat text-uppercase fw-bold fs-2"
      >
        Smart Bengal Hackathon 2023
      </h5>
      <h1
        style={{ color: "var(--primary-color)" }}
        className="text-uppercase fw-bold caveat"
      >
        Supporters
      </h1>
      <FadeIn
        from="bottom"
        positionOffset={200}
        triggerOffset={0}
        delayInMilliseconds={100}
      >
      </FadeIn>
      </div>
      <div style={{display:'flex',justifyContent:'center', alignItems:'center',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)'}}>
        <img src="https://media.licdn.com/dms/image/C4E12AQE2VFYfvXZJuw/article-cover_image-shrink_720_1280/0/1534542245782?e=2147483647&v=beta&t=oN_GHUzJIUw1L_mqWiqAtd2jIy0SGZOGo24kPWaq4sI" alt="sponsors" style={{height:'30rem',maxWidth:'100%'}}/>
      </div>
      </>
  )
}

export default Supporters
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FadeIn } from 'react-slide-fade-in'
import devfolio from '../../assets/devfolio.png'
import devfolio2 from '../../assets/devfolio-blue.png'

const Devfolio = () => {
    const [icon, setIcon] = useState(devfolio)
  return (
    <FadeIn
        from="bottom"
        positionOffset={150}
        triggerOffset={25}
        delayInMilliseconds={100}
      >
        <NavLink
          target="_blank"
          to={"https://smart-bengal-hackathon-1.devfolio.co/"}
          onMouseEnter={() => setIcon(devfolio2)}
          onMouseOut={() => setIcon(devfolio)}
          rel="norefferer"
        >
          <img src={icon} alt="devfolio-button" className="devfolio-button" />
        </NavLink>
      </FadeIn>
  )
}

export default Devfolio
import React from 'react';
import './Sponsors.css';
import sponsor1 from '../../assets/sponsors/sponsor1.png';
import sponsor2 from '../../assets/sponsors/sponsor2.png';
import sponsor3 from '../../assets/sponsors/sponsor3.jpg';
import sponsor4 from '../../assets/sponsors/sponsor4.png';

const Sponsors: React.FC = () => {
    return (
        <div className="container pt-5 pb-5">
            <h1 className='text-center mb-4 sponsor-heading'>Our Sponsors</h1>
            <div className='sponsor-wrapper mt-5'>
                <img className='sponsor-img' src={sponsor1} alt="sponsor1" />
                <img className='sponsor-img' src={sponsor2} alt="sponsor2" />
                <img className='sponsor-img' src={sponsor3} alt="sponsor3" />
                <img className='sponsor-img' src={sponsor4} alt="sponsor4" />
            </div>
        </div>
    )
}

export default Sponsors
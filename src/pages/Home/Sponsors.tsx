import React from 'react';
import './Sponsors.css';
import sponsor1 from '../../assets/sponsors/sponsor1.png';
import sponsor2 from '../../assets/sponsors/sponsor2.png';
import sponsor3 from '../../assets/sponsors/sponsor3.jpg';

const Sponsors: React.FC = () => {
    return (
        <div className="container pt-5 pb-5">
            <h1 className='text-center mb-4 sponsor-heading'>Our Sponsors</h1>
            <div className='sponsor-wrapper mt-5'>
                <img className='sponsor1' src={sponsor1} alt="sponsor1" />
                <img className='sponsor2' src={sponsor2} alt="sponsor2" />
                <img className='sponsor3' src={sponsor3} alt="sponsor3" />
            </div>
        </div>
    )
}

export default Sponsors
import { useData } from '../../contexts/Data';
import './Teams.style.css';


const Team = () => {
    const { teamData } = useData();

    return (
        <div className='pt-5 pb-5'>
            <h3 className='text-center text-decoration-underline' style={{ fontSize: '45px' }}>Team SBH</h3>
            <div className="container pt-5 pb-5 team-wrapper">
                {teamData.map((member, index) => {
                    return <div key={index} className="member-container">
                        {member.img && <img className='member-img mb-3' src={member.img} alt={`${member.name}`} />}
                        <h6 className='member-name'>{member.name}</h6>
                        <h6 className='member-designation mb-3'>{member.designation}</h6>
                        <h6 className='text-center member-committee'>{member.committee}</h6>
                    </div>
                })}
            </div>
        </div >
    )
}

export default Team
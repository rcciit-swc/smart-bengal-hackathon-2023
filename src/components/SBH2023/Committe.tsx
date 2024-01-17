import React from 'react'
import { impl_team_data } from './data/committe'

const CommitteCard = ({image,title,position,designation}:{
    image: string;
    title: string;
    position: string;
    designation: string;
})=>{
    return(
        <div className='committee-card-root'>
            <div>
            <img src={image} alt="" height={'200px'} style={{borderRadius:"100%"}} />
            </div>
            
            <div className='impact-card-left'>
                <h5>{title}</h5>
                <p>
                {position}
                </p>
                <p>
                    {designation}
                </p>
             
            </div>
        </div>
    )
}
const Committe = () => {
  return (
    <div className='impact-title'>
        <h1 className='text2'>Executive Committee</h1>
        <div className='committe-root'>
        {
            impl_team_data.map((item,index)=>{
                return(
                    <CommitteCard key={index} image={item.img} title={item.name} position={item.position} designation={item.designation}  />
                )
            })
        }
      
    </div>
    </div>
  
  )
}

export default Committe
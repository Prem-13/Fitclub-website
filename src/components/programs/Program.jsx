import React from './program.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'




const Program = () => {
  return (
    <div className="program" id='programs'>

       {/* Header */}
   
     <div className="program-header">
          <span className='stroke-text'>Explore our </span>
          <span>programs</span>
          <span className='stroke-text'>to shape you</span>

     </div>

              {/* datas in programs */}

        <div className="program-categories">
           
             {programsData.map((program)=>(
                   
                    <div className="category">

                       {program.image}
                       <span>{program.heading}</span>
                       <span>{program.details}</span>

                           <div className="join-now">
                             
                              <span>Join Now</span>
                            <img src={RightArrow} alt="" />

                           </div>

                    </div>



         ))}

        </div>





    </div>
  )
}

export default Program
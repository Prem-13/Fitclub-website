import { Header } from '../header/Header'
import React from './hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import { type } from '@testing-library/user-event/dist/type'
import NumberCounter from 'number-counter'



const Hero = () => {

     const transition = {type : 'spring', duration : 3}
     const mobile = window.innerWidth<=768?true : false;
  return (

    <div className="hero">

      <div className="blur hero-blur"></div>  

    <div className="left-h">

      <Header />

{/* the best add */}

      <div className="the-best-ad">
        <motion.div
            initial = {{left : mobile? '165px' : '238px'}}
            whileInView = {{left : '8px'}}
            transition = {{...transition, type : 'tween'}}>


        </motion.div>
        <span>the best fitness club in the town</span>
      </div>

{/* Hero Heading */}
   <div className="hero-text">
     
     {/* 1st div */}

        <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span>
        </div>

      {/* 2nd div */}

       <div>
           <span>Ideal Body</span>
       </div>
       
      {/* 3rd div */}

         <div>
           <span> IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST</span>
         </div>
</div>

                   {/* figures */}

     <div className="figures">

         <div>
           <span>
            <NumberCounter end={140} start={100} delay='4' prefix='+'/>
           </span>
           <span>expert coaching</span>
         </div>

          <div>
            <span><NumberCounter end={978} start={500} delay='4' prefix='+'/></span>
            <span>members joined</span>
          </div>

          <div>
            <span><NumberCounter end={50} start={10} delay='3' prefix='+'/></span>
            <span>fitness programs</span>
          </div>

     </div> 

                    {/* hero button */}
             

              <div className="hero-buttons">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
              </div>

    </div>

                  {/* right side */}

    <div className="right-h">

        <button className='btn'>Join Now</button>

              <motion.div  
              transition={transition}
              initial= {{ right : '-1rem'}}
              whileInView={{ right : '4rem'}}
               className="heart-rate">

                   <img src={Heart} alt=""/>
                   <span>Heart Rate</span>
                   <span>116 bpm</span>

              </motion.div>

            {/* hero image */}

            <img src={hero_image} alt="" className='hero-image'/>
            <motion.img transition={transition}
              initial= {{ right : '11rem'}}
              whileInView={{ right : '20rem'}}
            src={hero_image_back} alt="" className='hero-image-back'/>
           
            {/* calories */}

          <motion.div transition={transition}
              initial= {{ right : '37rem'}}
              whileInView={{ right : '28rem'}}
               className="calories">

                 <img src={Calories} alt="" />

                     <div>

                        <span>Calories Burned</span>
                        <span>220 kcal</span>

                     </div>
  
         </motion.div>
           

    </div>

  </div>
  )
}

export default Hero
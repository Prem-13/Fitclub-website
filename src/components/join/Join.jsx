import './join.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Join = () => {
      
    const form = useRef()

    const sendEmail = (e) => {

        e.preventDefault();
    
        emailjs.sendForm('service_6n7x2md', 'template_q91hl05', form.current, 'RFq8i6W01WT8ul_7p')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };



  return (
    <div className="Join" id='join-us'>
          <div className="left-j">
                <hr />
          <div>
            <span className='stroke-text'>READY TO</span>
            <span> LEVEL UP</span>
          </div>

          <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'> WITH US</span>
          </div>

    </div>
          <div className="right-j">
              <form ref={form} className='email-container'>
                   
                   <input type="email" name='user_email' placeholder='Enter you Email address' onSubmit={sendEmail} />
                   <button className='btn btn-j'>Join now</button>


              </form>
           



          </div>


    </div>
  )
}

export default Join
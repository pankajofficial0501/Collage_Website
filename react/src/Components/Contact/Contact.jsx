import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3f80e0cd-0314-406e-bda4-6c28d76e0813");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className = 'contact'>
        <div className = "contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ul>
                <li>Contact@GreatStack.dev</li>
                <li> +1 123-456-7890</li>
                <li> 77 Massachusetts Ave, Cambridge <br /> MA 02139 , USA</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit = {onSubmit}>
                <label>Your name</label>
                <input type="text" name = "name" placeholder = "Enter your name" required/>
                <label>Phone Number</label>
                <input type="tel" name = "phone" placeholder = "Enter your phone number" required />
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder="Write your message here" required></textarea>
                <button type = "submit" className = "btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>
                {result}
            </span>
        </div>
    </div>
  )
}

export default Contact

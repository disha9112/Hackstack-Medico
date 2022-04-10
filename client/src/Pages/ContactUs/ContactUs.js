// Test -------------------------- Importing the pacakges from react ----------------------
import {
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaDribbble,
    FaPhone,
    FaMapMarker,
    FaEnvelope
} from "react-icons/fa";


// Test -------------------------- Importing the Packages ---------------------------------

// Test -------------------------- Importing the styles on the current component ---------- 
import Footer from "../../Components/Footer/Footer";
import "./ContactUs.css";

// Test -------------------------- Importing the other components -------------------------

// Test -------------------------- The current component ----------------------------------
const ContactUsPage = () => {
    return (
        <div>
            <div class="contact-us-form-body">
                <div id="left">

                    <div class="get-in-touch">

                        <h2>Get in touch</h2>
                        <p>
                            We would love to hear from you. Our friendly team is always her to chat.
                        </p>

                        <ul>
                            <li class="icon-content-contact-us-form-container"><FaEnvelope></FaEnvelope>

                                <div class="content-container">
                                    <h3>Chat to Us</h3>
                                    <p>Our friendly team is here to help</p>
                                    <p class="icon-content">medico@gmail.com</p>
                                </div>

                            </li>

                            <li class="icon-content-contact-us-form-container"> <FaMapMarker></FaMapMarker>

                                <div class="content-container">
                                    <h3>Office</h3>
                                    <p>Come say hello at our office HQ</p>
                                    <p class="icon-content">IIITM Gwalior</p>
                                </div>

                            </li>

                            <li class="icon-content-contact-us-form-container"><FaPhone></FaPhone>

                                <div class="content-container">
                                    <h3>Phone</h3>
                                    <p>Monday to Friday 9am to 5pm</p>
                                    <p class="icon-content">6969696969 </p>
                                </div>

                            </li>
                        </ul>


                    </div>

                    <div class="footer">
                        <FaTwitter></FaTwitter>
                        <FaFacebookF></FaFacebookF>
                        <FaLinkedinIn></FaLinkedinIn>
                        <FaInstagram></FaInstagram>
                    </div>

                    <div id="parent">
                        <div id="quarter"></div>
                        <div id="circle"></div>
                    </div>

                </div>


                <div id="main">

                    <div id="demo">

                        <div class="contact-us-form-heading">
                            <h2 class="heading">Reach Us</h2>
                            <p class="heading">You can contact us anytime via <span id="medico-email-id">medico@gmail.com</span></p>
                        </div>


                        <div class="contact-us-form-form">
                            <form action="#form" id="form">
                                <label for="name">Name</label>
                                <input id="name" type="text" name="name" required />

                                <label for="email">E-mail</label>
                                <input id="email" type="email" name="email" required />

                                <label for="phone">Phone Number</label>
                                <input id="phone" type="tel" name="phone" required />

                                <label for="subject">Subject</label>
                                <input type="text" name="subject" id="subject" required />

                                <label for="message">Message</label>
                                <textarea name="mess" id="mess" cols="auto" rows="auto"></textarea>

                                <button type="submit">Send Message</button>
                            </form>
                        </div>


                    </div>

                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>

    );
}

// Test -------------------------- Exporting the current component ------------------------
export default ContactUsPage;
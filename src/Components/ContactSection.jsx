import styles from "./Styling/ContactSection.module.css"
import { AiOutlineMail , AiOutlineGithub , AiFillLinkedin } from "react-icons/ai"
import emailjs from '@emailjs/browser';
import { Form,TextArea } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import Fade from "react-reveal/Fade"
// import { useRef } from "react";
export function ContactSection() {
 
const handleOnSubmit = (e) => {
e.preventDefault()
  emailjs.sendForm('service_908gdqf', 'template_b76n9pd', e.target, 'KcOBkDiI9xi5b_JZM').then(
      (result) => {
        console.log(result.text)
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        })
      },
      (error) => {
        console.log(error.text)
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      },
    )
    e.target.reset()
  }
  return (
    <div className={styles.rootCont} id="contact">
      <Fade bottom>
        <p className={styles.contactHeading}>Contact Me</p>
        <div className="App">
      <Form onSubmit={handleOnSubmit}  >
        <input
          label="Email"
          className={styles.feedback_input}
          name="email"
          placeholder="Email…"
          required
          />
        <input
         className={styles.feedback_input}
          label="Name"
          name="from_name"
          placeholder="Name…"
          required
          />
        <input
        className={styles.feedback_input}
          control={TextArea}
          label="Message"
          name="message"
          placeholder="Message…"
          required
        />
        <button type="submit" color="green">Send</button>
        </Form>
    </div>
    <hr style={{ width: "95vw" }} />
        <p className={styles.text}>Did you enjoy my work? Want to get in touch?</p>
        <p className={styles.text}>You can reach out to me at:</p>
        <div className={styles.iconsCont}>
          <a href="mohite461998@gmail.com">
            <AiOutlineMail className={styles.emailicon} />
          </a>
          <a
            href="https://www.linkedin.com/in/pravin-mohite-40b56221b/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className={styles.linkedInIcon} />
          </a>
          <a href="https://github.com/pravin0428" rel="noreferrer" target="_blank">
            <AiOutlineGithub className={styles.gitIcon} />
          </a>
        </div>
        <p className={styles.text}>Phone:+918766535472</p>{" "}
        <p className={styles.text}>Email:mohite461998@gmail.com</p>
      </Fade>
    </div>
  )
}
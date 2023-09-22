import Navbar from '../../components/Navbar/Navbar'
import insta from '/icons/insta.svg'
import fb from '/icons/fb.svg'
import x from '/icons/x.svg'
import linkedin from '/icons/linkedin.svg'
import './ContactUs.scss'
import FormInput from '../../components/FormInput/FormInput'
import ToggleButton from '../../components/ToggleButton/ToggleButton'

export default function ContactUs() {
  return (
    <main id='contact'>
        <Navbar />

        <section>
            <h2>Get in Touch</h2>

            <p>
                Contact Information <br /> <br />

                <span>
                    27,Alara Street <br />
                    Yaba 100012 <br />
                    Lagos State
                </span> <br /> <br />

                <span> Call Us : 07067981819 </span> <br />

                <span>
                    we are open from Monday-Friday <br />
                    08:00am - 05:00pm
                </span>
            </p>

            <menu>
                <h4>Share on</h4>

                <span>
                    {socials.map(items => (
                        <a href="/">
                            <img src={items} alt="" />
                        </a>
                    ))}
                </span>
            </menu>
        </section>

        <form action="">
            <aside>
                <h3>Questions or need assistance?</h3>
                <h3>Let us know  about it!</h3>
            </aside>

            <FormInput type={'text'} title={'First Name'} id={'first'} />
            <FormInput type={'email'} title={'Mail'} id={'email'} />

            <span id='text'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
            </span>

            <ToggleButton
                text={'Submit'}
                className={'submit-btn'}
            />
        </form>
    </main>
  )
}


const socials = [
    insta, x, fb, linkedin
]
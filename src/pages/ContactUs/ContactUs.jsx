import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import insta from '/icons/insta.svg'
import fb from '/icons/fb.svg'
import x from '/icons/x.svg'
import linkedin from '/icons/linkedin.svg'
import './ContactUs.scss'

export default function ContactUs() {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        first: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true)
    
        const data = JSON.stringify({
            email: formData.email,
            first_name: formData.first,
            message: formData.message,
        });
    
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
    
        axios
            .post('https://backend.getlinked.ai/hackathon/contact-form', data, config)
            .then((response) => {
                console.log('Response:', response.data);
                toast.success(
                    'Your request has been submitted successfully, and we would be in touch with you'
                );
                setFormData({
                    first: '',
                    email: '',
                    message: '',
                })
                setIsLoading(false)
            })
            .catch((error) => {
                console.error(error);
                toast.error('There was an error submitting the form');
                setIsLoading(false)
            });
    }    

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
                        {socials.map((items, idx) => (
                            <a href="/" key={idx}>
                                <img src={items} alt="" />
                            </a>
                        ))}
                    </span>
                </menu>
            </section>

            <form onSubmit={handleSubmit}>
                <aside>
                    <h3>Questions or need assistance?</h3>
                    <h3>Let us know  about it!</h3>
                </aside>

                <span id='form-input'>
                    <input
                        type={'text'}
                        name={'first'}
                        id={`first`}
                        value={formData.first}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor={'first'} className={formData.first ? 'active' : ''}>
                        First Name
                    </label>
                </span>

                <span id='form-input'>
                    <input
                        type={'email'}
                        name={'email'}
                        id={`email`}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor={'email'} className={formData.email ? 'active' : ''}>
                        Mail
                    </label>
                </span>

                <span id='text'>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" required value={formData.message} onChange={handleChange}></textarea>
                </span>

                {isLoading ? (
                    <button type='button' disabled className='submit-btn'>
                        <i className='fa-solid fa-spinner fa-spin'></i>
                    </button>
                ) : (
                    <input type="submit" value="Submit" className='submit-btn' />
                )}

            </form>
            <ToastContainer />
        </main>
    )
}


const socials = [
    insta, x, fb, linkedin
]
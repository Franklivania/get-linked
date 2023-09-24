import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../../components/Navbar/Navbar'
import sign from '/images/login.svg'
import man from '/icons/man.svg'
import girl from '/icons/girl.svg'
import content from '../../../data/SignUp.json'
import axios from 'axios';
import './SignUp.scss'
import SuccessModal from '../../components/SuccessModal/SuccessModal';

export default function SignUp() {
    const [sending, setSending] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    //default form handling
    const [formData, setFormData] = useState({
        team: '',
        phone: '',
        email: '',
        project: '',
        category: 0,
        policy: true,
        size: 0,
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: name === 'category' ? parseInt(value, 10) : name === 'size' ? parseInt(value, 10) : value,
        })
    }

    // api for categories mapping
    const {isLoading, error, data} = useQuery({
        queryKey: [],
        queryFn: () =>
            axios
                .get('https://backend.getlinked.ai/hackathon/categories-list')
                .then((res) => res.data)
    })

    if (isLoading) return <i className="fa-solid fa-circle-notch fa-spin fa-2x"></i>

    if (error) return 'An error has occured while loading the data'

    //handle form submission here
    function formSubmit(e) {
        e.preventDefault();
        setSending(true);
    
        const requestData = {
            email: formData.email,
            phone_number: formData.phone,
            team_name: formData.team,
            group_size: formData.size,
            project_topic: formData.project,
            category: formData.category,
            privacy_policy_accepted: formData.policy,
        };

        console.log(requestData)
    
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
    
        axios
            .post('https://backend.getlinked.ai/hackathon/registration', requestData, config)
            .then((response) => {
                console.log('Response:', response.data);
                toast.success(
                    'You have registered successfully. Keep a look at your mails 😉'
                );
                setFormData({
                    team: '',
                    phone: '',
                    email: '',
                    project: '',
                    category: 0,
                    policy: false,
                    size: 0,
                });
                setIsSuccess(true);
                setSending(false);
            })
            .catch((error) => {
                console.error(error);
                if (error.response && error.response.status === 400) {
                    toast.error('This email has been used. Please use a different email address.');
                } else {
                    toast.error('There was an issue submitting your registration, please try again');
                }
                setSending(false);
            });
    }
    

    return (
        <main id='signup'>
            <Navbar />

            <img src={sign} id='sign' alt="person sitting on a chair facing forward with a laptop on a desk a his side" />

            <form onSubmit={formSubmit}>
                <h2>Register</h2>

                <img src={sign} id='mb-sign' alt="person sitting on a chair facing forward with a laptop on a desk a his side" />

                <p>
                    Be part of this movement! &nbsp; &nbsp;
                    <span>
                        ..... <img src={girl} alt="girl walking" />
                        ..... <img src={man} alt="man walking" />
                        ..........
                    </span>
                </p>

                <h3>CREATE YOUR ACCOUNT</h3>

                <section>
                    <span>
                        <label htmlFor="team">Team's name</label>
                        <input type="text" name="team" id="team" placeholder='Enter the name of your group' value={formData.team} onChange={handleChange} required/>
                    </span>

                    <span>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" placeholder='Enter your phone phone' value={formData.phone} onChange={handleChange}  required/>
                    </span>

                    <span>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter your email address' value={formData.email} onChange={handleChange}  required/>
                    </span>

                    <span>
                        <label htmlFor="project">Project Topic</label>
                        <input type="text" name="project" id="project" placeholder='What is your group project topic' value={formData.project} onChange={handleChange}  required/>
                    </span>

                    <span>
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" value={formData.category} onChange={handleChange} required>
                            <option value={0}>Select your category</option>
                            {data.map((category) => (
                                <option value={category.id} key={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </span>

                    <span>
                        <label htmlFor="size">Group Size</label>
                        <select name="size" id="size" value={formData.size} onChange={handleChange} required>
                            <option value={0}>Select</option>
                            {content.size.map((size, idx) => (
                                <option value={parseInt(size, 10)} key={idx}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </span>

                </section>

                <i>Please review your registration details before submitting</i>

                <span>
                    <input type="checkbox" name="checkbox" id="checkbox" value={formData.policy} onChange={handleChange}  required/>
                    <label htmlFor="checkbox">I agreed with the event terms and conditions  and privacy policy</label>
                </span>

                {sending ? (
                    <button type='button' disabled className='submit-btn'>
                        <i className='fa-solid fa-spinner fa-spin'></i>
                    </button>
                ) : (
                    <input type="submit" value="Register Now" className='submit-btn'/>
                )}
            </form>
            {isSuccess && <SuccessModal closeModal={() => setIsSuccess(false)} />}
            <ToastContainer />
        </main>
    )
}
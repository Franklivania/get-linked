import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import sign from '/images/login.svg'
import man from '/icons/man.svg'
import girl from '/icons/girl.svg'
import content from '../../../data/SignUp.json'
import ToggleButton from '../../components/ToggleButton/ToggleButton'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './SignUp.scss'

export default function SignUp() {

    //default form handling
    const [formData, setFormData] = useState({
        team: '',
        number: '',
        email: '',
        project: '',
        category: '',
        size: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
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

    return (
        <main id='signup'>
            <Navbar />

            <img src={sign} id='sign' alt="person sitting on a chair facing forward with a laptop on a desk a his side" />

            <form action="">
                <h2>Register</h2>

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
                        <input type="text" name="team" id="team" placeholder='Enter the name of your group' value={formData.team} onChange={handleChange}/>
                    </span>

                    <span>
                        <label htmlFor="number">Phone</label>
                        <input type="tel" name="number" id="number" placeholder='Enter your phone number' value={formData.number} onChange={handleChange} />
                    </span>

                    <span>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter your email address' value={formData.email} onChange={handleChange} />
                    </span>

                    <span>
                        <label htmlFor="project">Project Topic</label>
                        <input type="text" name="project" id="project" placeholder='What is your group project topic' value={formData.project} onChange={handleChange} />
                    </span>

                    <span>
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" value={formData.category} onChange={handleChange}>
                            {data.map((data, idx) => (
                                <option value="category" key={idx}>
                                    {data.name}
                                </option>
                            ))}
                        </select>
                    </span>

                    <span>
                        <label htmlFor="size">Group Size</label>
                        <select name="size" id="size" value={formData.size} onChange={handleChange} >
                            {content.size.map((items, idx) => (
                                <option value="size" key={idx}>
                                    {items}
                                </option>
                            ))}
                        </select>
                    </span>

                </section>

                <i>Please review your registration details before submitting</i>

                <span>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">I agreed with the event terms and conditions  and privacy policy</label>
                </span>

                <ToggleButton
                    text={'Register Now'}
                    className={'submit-btn'}
                    // onClick={}
                />
            </form>
        </main>
  )
}
import Navbar from '../../components/Navbar/Navbar'
import sign from '/images/login.svg'
import man from '/icons/man.svg'
import girl from '/icons/girl.svg'
import data from '../../../data/SignUp.json'
import './SignUp.scss'
import ToggleButton from '../../components/ToggleButton/ToggleButton'

export default function SignUp() {
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
                    <input type="text" name="team" id="team" placeholder='Enter the name of your group' />
                </span>

                <span>
                    <label htmlFor="number">Phone</label>
                    <input type="tel" name="number" id="number" placeholder='Enter your phone number' />
                </span>

                <span>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter your email address' />
                </span>

                <span>
                    <label htmlFor="project">Project Topic</label>
                    <input type="text" name="project" id="project" placeholder='What is your group project topic' />
                </span>

                <span>
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category">
                        {data.category.map((items, idx) => (
                            <option value="category" key={idx}>
                                {items}
                            </option>
                        ))}
                    </select>
                </span>

                <span>
                    <label htmlFor="size">Group Size</label>
                    <select name="size" id="size">
                        {data.size.map((items, idx) => (
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
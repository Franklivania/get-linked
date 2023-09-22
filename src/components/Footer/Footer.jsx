import logo from '/images/logo.svg'
import insta from '/icons/insta.svg'
import fb from '/icons/fb.svg'
import x from '/icons/x.svg'
import linkedin from '/icons/linkedin.svg'
import tel from '/icons/tel.svg'
import location from '/icons/location.svg'
import { Link } from 'react-scroll'
import PageButton from '../PageButton/PageButton'
import './Footer.scss'

export default function Footer() {
  return (
    <footer>
        <aside>
            <article>
                <img src={logo} alt="logo" id='logo' />
                <p>
                    Getlinked Tech Hackathon is a technology innovation program 
                    established by a group of organizations with the aim of showcasing 
                    young and talented individuals in the field of technology
                </p>

                <p id='terms'>
                    Terms of Use  &nbsp;<span>|</span>&nbsp; Privacy Policy
                </p>
            </article>

            <menu>
                <h4>Useful Links</h4>
                {navData.map((data, index) => (
                    <Link
                        key={index}
                        // to={data.link}
                        to={data.link}
                        smooth={true}
                        spy={true}
                        duration={500}
                        className='nav-btn links'
                        activeClass='activetoggle'
                    > {data.title}</Link>
                ))}

                <PageButton
                    title={'Register'}
                    link={'/signup'}
                    className={'reg-btn'}
                />

                <p>
                    <span>Follow us</span>
                    {socials.map(items => (
                        <a href="/">
                            <img src={items} alt="" />
                        </a>
                    ))}
                </p>
            </menu>

            <menu>
                <h4>Contact Us</h4>

                <p>
                    <img src={tel} alt="tel" />
                    +234 6707653444
                </p>

                <p>
                    <img src={location} alt="location" />
                    27,Alara Street <br />
                    Yaba 100012 <br />
                    Lagos State
                </p>
            </menu>
        </aside>

        <p id='rightts'>All rights reserved. © getlinked Ltd.</p>
    </footer>
  )
}

const navData = [
    {
        title: "Timeline",
        link: "timeline"
    },
    {
        title: "Overview",
        link: "overview"
    },
    {
        title: "FAQs",
        link: "faqs"
    },
]

const socials = [
    insta, x, fb, linkedin
]
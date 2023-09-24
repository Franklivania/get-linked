import { useState, useEffect } from 'react'
import PageButton from '../PageButton/PageButton'
import logo from '/images/logo.svg'
import { Link } from 'react-scroll'
import './Navbar.scss'
import ToggleButton from '../ToggleButton/ToggleButton'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeNav, setActiveNav] = useState(false)

    useEffect(() => {
        function handleScroll() {
            if(window.scrollY > 300) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <header id="navbar" className={scrolled ? 'scrolled' : ''}>
            <PageButton
                link={'/'}
                image={logo}
                className={'nav-btn logo'}
            />

            <NavContent className={'dk-nav'} />
            
            <ToggleButton
                icon={'fa-solid fa-bars-staggered'}
                className={`tg-btn`}
                onClick={() => setActiveNav(!activeNav)}
            />

            <NavContent 
                className={`mb-nav ${activeNav ? 'active' : ''}`}
                closeNav={() => setActiveNav(false)}
            />
        </header>
    )
}

function NavContent({className, closeNav}) {
    return(
        <div className={`nav-content ${className}`}>
            <ToggleButton
                icon={'fa-solid fa-x'}
                className={'cl-nav'}
                onClick={closeNav}
            />

            <nav>
                {navData.map((data, index) => (
                    <Link 
                        key={index}
                        to={data.link}
                        smooth={true}
                        spy={true}
                        duration={500}
                        className='nav-btn links'
                        activeClass='activetoggle'
                    > {data.title}</Link>
                ))}

                <PageButton
                    title={'Contact'}
                    link={'/contact'}
                    className={'nav-btn contact'}
                />
            </nav>

            <PageButton
                title={'Register'}
                link={'/signup'}
                className={'register'}
            />
        </div>
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
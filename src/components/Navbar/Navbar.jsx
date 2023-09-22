import { useState, useEffect } from 'react'
import PageButton from '../PageButton/PageButton'
import logo from '/images/logo.svg'
import './Navbar.scss'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

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

            <nav>
                {navData.map((data, index) => (
                    <PageButton
                        key={index}
                        title={data.title}
                        link={data.link}
                        className={'nav-btn toggle'}
                    />
                ))}

            </nav>

            <PageButton
                title={'Register'}
                link={'/signup'}
                className={'register'}
            />
        </header>
    )
}

const navData = [
    {
        title: "Timeline",
        link: "#timeline"
    },
    {
        title: "Overview",
        link: "#overview"
    },
    {
        title: "FAQs",
        link: "#faqs"
    },
    {
        title: "Contact",
        link: "/contact"
    },
]
import styled from "styled-components"
import { colors, values } from "../../StyledComponents/Styles"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import Idea from "../../components/LandingComponents/Idea"
import Rules from "../../components/LandingComponents/Rules"
import Criteria from "../../components/LandingComponents/Criteria"

const LandingDisplay = styled.main`
    position: relative;
    width: ${values.width};
    overflow-x: hidden;
    font-family: ${values.font};
    background: ${colors.dkPurple};
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    gap: 2em;
`


export default function Landing () {
    return(
        <LandingDisplay>
            <Navbar />
            <Hero />
            <Idea />
            <Rules />
            <Criteria />
        </LandingDisplay>
    )
}
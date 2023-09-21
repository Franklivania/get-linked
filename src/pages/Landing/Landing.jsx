import styled from "styled-components"
import { colors, values } from "../../StyledComponents/Styles"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"

const LandingDisplay = styled.main`
    postion: relative;
    width: ${values.width};
    height: ${values.height};
    overflow-x: hidden;
    font-family: ${values.font};
    background: ${colors.dkPurple};
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    gap: 2em;
`
    
const LandingContent = styled.section`
    width: 100%;
    padding: 0 4em;
    background: ${colors.dkPurple};

`

export default function Landing () {
    return(
        <LandingDisplay>
            <Navbar />
            <LandingContent>
                <Hero />
            </LandingContent>
        </LandingDisplay>
    )
}
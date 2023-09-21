import styled from "styled-components"
import { values } from "../../styled-components/Styles"

const LandingDisplay = styled.main`
    postion: relative;
    width: ${values.width};
    height: ${values.height};
    overflow-x: hidden;
`

export default function Landing () {
    return(
        <LandingDisplay>
            
        </LandingDisplay>
    )
}
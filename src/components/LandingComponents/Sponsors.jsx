import styled from "styled-components"
import sponsors from '/images/sponsors.svg'
import { values, colors } from "../../StyledComponents/Styles"

const SponsorDisplay = styled.section`
    position: relative;
    width: 100%;
    display: grid;
    place-content: center;
    padding: 2em 4em;
    border-bottom: 0.002em solid ${colors.borderColor};

    h1{
        font-family: ${values.bgFont};
    }

    h1, p{
        text-align: center;
    }

    img{
        width: 100%;
        margin-top: 3em;
    }
`

export default function Sponsors() {
  return (
    <SponsorDisplay>
        <h1>Partners and Sponsors</h1>
        <p>
            Getlinked Hackathon 1.0 is honored to have the following major 
            companies as its partners and sponsors
        </p>

        <img src={sponsors} alt="sponsors" />
    </SponsorDisplay>
  )
}

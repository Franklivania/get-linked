import styled from "styled-components"
import { colors, mixins, values } from "../../StyledComponents/Styles"
import PageButton from "../PageButton/PageButton"
import HeroImage from "./HeroImage/HeroImage"
import chain from '/images/chain.svg'
import bulb from '/images/bulb.svg'
import flare from '/images/flare.svg'

const HeroDisplay = styled.main`
    positon: relative;
    width: ${values.width};
    height: ${values.height};
    padding: 0 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.02em solid ${colors.borderColor};
    font-family: ${values.font};
    margin: 0 0 3em 0;

    aside{
        position: relative;
        margin: 9em 0 0 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1em;

        #flare{
            position: absolute;
            width: 100%;
            top: -70%;
            left: -10%;
        }
        

        h1{
            position: relative;
            width: 100%;
            line-height: 1em;
            font-size: ${values.extraLargeText};
            font-weight: 900;
            font-family: ${values.bgFont};
            span{
                color: ${colors.pink};
            }
            
            #bulb{
                position: absolute;
                top: -50%;
                right: 15%;
            }

            #chain{
                position: absolute;
            }
        }

        h2{
            font-weight: 300;
            margin: 3em 0 0 0;

            small{
                font-size: ${values.smallText}
            }
        }
    }

    .register{
        position: relative;
        padding: .5em 2em;
        background: ${mixins.gradient};

        &:hover, &.activeLink{
            color: ${colors.white};
        }
    }
`

export default function Hero() {
  return (
    <HeroDisplay>

        <aside>
            <img src={flare} alt="flare" id="flare" />

            <h1>
                getlinked Tech Hackathon 
                <span>1.0</span>
                <img src={chain} alt="chain" id="chain" />
                <img src={bulb} alt="bulb" id="bulb" />
            </h1>
            <p>
                Participate in getlinked tech Hackathon 2023 stand 
                a chance to win a Big prize
            </p>


            <PageButton
                title={'Register'}
                link={'/signup'}
                className={'register'}
            />

            <h2>
                00<small>H</small> &nbsp;
                00<small>M</small> &nbsp;
                00<small>S</small>
            </h2>
        </aside>

        <HeroImage />
    </HeroDisplay>
  )
}

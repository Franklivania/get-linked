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
    height: calc(${values.height} * 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: ${mixins.borderBottom};
    font-family: ${values.font};

    #flare{
        position: absolute;
        width: 50%;
        top: 0;
        left: 0;
    }
    
    aside{
        position: relative;
        margin: 15em 0 0 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1em;

        h1{
            position: relative;
            width: 60%;
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
                right: 28%;
            }
            #chain{
                position: absolute;
            }
        }

        p{
            width: 35%;
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
    }
`

export default function Hero() {
  return (
    <HeroDisplay>
        <img src={flare} alt="flare" id="flare" />

        <aside>

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

        {/* <img src={avatar} alt="avatar" /> */}

        <HeroImage />
    </HeroDisplay>
  )
}

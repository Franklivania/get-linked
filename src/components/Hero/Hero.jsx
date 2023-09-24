import styled from "styled-components"
import { colors, devices, mixins, values } from "../../StyledComponents/Styles"
import PageButton from "../PageButton/PageButton"
import HeroImage from "./HeroImage/HeroImage"
import chain from '/images/chain.svg'
import bulb from '/images/bulb.svg'
import flare from '/images/flare.svg'
import line from '/images/line.svg'
import { Slide } from "react-awesome-reveal"

const HeroDisplay = styled.main`
    position: relative;
    width: ${values.width};
    height: ${values.height};
    padding: 0 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.02em solid ${colors.borderColor};
    font-family: ${values.font};
    margin: 3em 0 3em 0;

    @media screen and ${devices.tablet} {
        padding: 0 2em;
        flex-direction: column;
    }

    #info{
        position: absolute;
        top: 5%;
        right: 5%;
        font-size: clamp(calc(${values.largeText} * 0.2), 5vw, calc(${values.largeText} * 0.7));

        @media screen and ${devices.tablet} {
            position: relative;
            top: 7%;
            left: 0;
            width: 100%;
            margin: auto;
            text-align: center;
        }

        #line{
            position: absolute;
            width: 50%;
            bottom: -40%;
            right: 0;

            @media screen and ${devices.tablet} {
                right: 20%;
            }
        }
    }

    aside{
        position: relative;
        margin: 9em 0 0 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1em;

        @media screen and ${devices.tablet} {
            text-align: center;

            p{
                text-align: center;
                padding: 0 3em;
            }
        }

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
            font-size: clamp(calc(${values.largeText} * 1), 5vw, ${values.extraLargeText});
            font-weight: 900;
            font-family: ${values.bgFont};

            @media screen and ${devices.tablet} {
                text-align: center;

                #bulb, #chain{
                    width: 5%;
                }
            }

            span{
                color: ${colors.pink};
            }
            
            #bulb{
                position: absolute;
                top: -50%;
                right: 15%;

                @media screen and ${devices.tablet} {
                    right: 25%;
                }
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

        @media screen and ${devices.tablet} {
            margin: auto;
        }

        &:hover, &.activeLink{
            color: ${colors.white};
        }
    }
`

export default function Hero() {
  return (
    <HeroDisplay>
        <h1 id="info">
            Igniting a Revolution in HR Innovation
            <img src={line} alt="line" id='line' />
        </h1>
        <aside>
            <img src={flare} alt="flare" id="flare" />
            <Slide direction="left" delay={1} cascade={true} triggerOnce={true}>
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
            </Slide>
        </aside>

        <HeroImage />
    </HeroDisplay>
  )
}

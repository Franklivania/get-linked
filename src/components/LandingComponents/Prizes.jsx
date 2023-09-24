import styled from "styled-components"
import { colors, devices, values } from "../../StyledComponents/Styles"
import cup from '/images/cup.svg'
import awards from '/images/Rewards.svg'

const PrizesDisplay = styled.section`
    position: relative;
    width: 100%;
    padding: 2em 4em;
    display: flex;
    flex-direction: column;
    gap: 3em;
    border-bottom: 0.002em solid ${colors.borderColor};

    article{
        align-self: flex-end;

        h1{
            font-size: ${values.largeText};
            font-family: ${values.bgFont};
            line-height: 1;

            span{
                color: ${colors.pink}
            }
        }

        p{
            width: 60%;
        }

        @media screen and ${devices.tablet} {
            width: 100%;
            align-self: center;
            text-align: center;

            p{
                width: 100%;
                text-align: center;
            }
        }
    }

    aside{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        
        #cup{
            width: 40%;
        }
        
        #awards{
            width: 50%;
        }

        @media screen and ${devices.tablet} {
            flex-direction: column;
            gap: 2em;

            #cup, #awards{
                width: 95%;
            }
        }
    }
`

export default function Prizes() {
  return (
    <PrizesDisplay>
        <article>
            <h1>
                Prizes and <br />
                <span>Rewards</span>
            </h1>

            <p>
                Highlight of the prizes or rewards for winners and
                for participants.
            </p>
        </article>

        <aside>
            <img src={cup} alt="cup" id="cup" />
            <img src={awards} alt="awards" id="awards" />
        </aside>

    </PrizesDisplay>
  )
}

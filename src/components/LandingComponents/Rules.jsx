import styled from "styled-components"
import rules from '/images/guide.svg'
import { colors, values, devices } from "../../StyledComponents/Styles"
import { Slide } from "react-awesome-reveal"

const RulesDisplay = styled.section`
    position: relative;
    width: 100%;
    padding: 0 4em;
    display: flex;
    align-items: center;
    gap: 6em;
    border-bottom: 0.02em solid ${colors.borderColor};

    @media screen and ${devices.tablet} {
        flex-direction: column-reverse;
        padding: 3em;
        gap: 2em;

        img{
            width: 80%;
        }
    }

    article{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1em;

        @media screen and ${devices.tablet} {
            text-align: center;
        }

        h1{
            font-family: ${values.bgFont};
            font-size: clamp(calc(${values.largeText} * 0.7), 5vw, ${values.largeText});
            line-height: 1em;

            span{
                color: ${colors.pink}
            }
        }
    }
`

export default function Rules() {
  return (
    <RulesDisplay>
        <article>
            <Slide direction="left" cascade triggerOnce>
                <h1>
                    Rules and <br />
                    <span>Guidelines</span>
                </h1>

                <p>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </p>
            </Slide>
        </article>

        <img src={rules} alt="rules" id="rules" />
    </RulesDisplay>
  )
}

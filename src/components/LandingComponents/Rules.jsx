import styled from "styled-components"
import rules from '/images/guide.svg'
import { colors, values } from "../../StyledComponents/Styles"

const RulesDisplay = styled.section`
    position: relative;
    width: 100%;
    padding: 0 4em;
    display: flex;
    align-items: center;
    gap: 6em;
    border-bottom: 0.02em solid ${colors.borderColor};

    article{
        postion: relative;
        display: flex;
        flex-direction: column;
        gap: 1em;

        h1{
            font-family: ${values.bgFont};
            font-size: ${values.largeText};
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
        </article>

        <img src={rules} alt="rules" id="rules" />
    </RulesDisplay>
  )
}

import styled from "styled-components"
import { colors, values } from "../../StyledComponents/Styles"
import idea from '/images/idea.svg'
import prstar from '/images/pr-star.svg'

const IdeaDisplay = styled.section`
    position: relative;
    width: 100%;
    height: ${values.height};
    padding: 3em 4em;
    border-bottom: 0.002em solid ${colors.borderColor};
    display: flex;
    align-items: center;
    gap: 6em;

    .star{
        position: absolute;
        width: 10%;
        top: 0;
    }

    img{
        width: 100%;
    }

    article{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1em;

        h1{
            font-size: ${values.largeText};
            font-family: ${values.bgFont};
            line-height: 1;

            span{
                color: ${colors.pink}
            }
        }
    }
`

export default function Idea() {
  return (
    <IdeaDisplay>
        <img src={idea} alt="idea" />

        <img src={prstar} alt="star" className="star st-left"/>
        <img src={prstar} alt="star" className="star st-right"/>

        <article>
            <h1>
                Introduction to getlinked <br />
                <span>tech Hackathon 1.0</span>
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
    </IdeaDisplay>
  )
}

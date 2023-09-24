import styled from "styled-components"
import judges from '/images/judge.svg'
import data from '../../../data/Criteria.json'
import ToggleButton from '../ToggleButton/ToggleButton'
import { colors, mixins, values, devices } from "../../StyledComponents/Styles"
import { Slide } from "react-awesome-reveal"

const CriteriaDisplay = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6em;
    padding: 2em 4em;
    border-bottom: 0.002em solid ${colors.borderColor};

    @media screen and ${devices.tablet} {
        flex-direction: column;
        gap: 2em;
    }

    #judges{
        width: 50%;

        @media screen and ${devices.tablet} {
            width: 80%;
        }
    }

    aside{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2em;

        @media screen and ${devices.tablet} {
            text-align: center;
        }

        h1{
            font-size: clamp(calc(${values.largeText} * 0.7), 5vw, ${values.largeText});
            line-height: 1;
            font-family: ${values.bgFont};

            span{
                color: ${colors.pink};
            }
        }

        article{
            position: relative;

            p{
                span{
                    color: ${colors.pink};
                }
            }
        }
    }

    .read-more{
        background: ${mixins.gradient};

        @media screen and ${devices.tablet} {
            align-self: center;
        }
    }
`

export default function Criteria() {
  return (
    <CriteriaDisplay>
        <img src={judges} alt="judges" id="judges" />

        <aside>
            <h1>
                Judging Criteria <br />
                <span>Key attributes</span>
            </h1>

                {data.map(items => (
                    <Slide direction="right" cascade triggerOnce >
                        <article key={items}>
                            <p>
                                <span>{items.title}:</span>
                                {items.text}
                            </p>
                        </article>
                    </Slide>
                ))}

            <ToggleButton
                text={'Read More'}
                className={'read-more'}
            />
        </aside>
    </CriteriaDisplay>
  )
}

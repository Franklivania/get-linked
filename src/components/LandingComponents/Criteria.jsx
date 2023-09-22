import styled from "styled-components"
import judges from '/images/judge.svg'
import data from '../../../data/Criteria.json'
import ToggleButton from '../ToggleButton/ToggleButton'
import { colors, mixins, values } from "../../StyledComponents/Styles"

const CriteriaDisplay = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6em;
    padding: 2em 4em;
    border-bottom: 0.002em solid ${colors.borderColor};

    #judges{
        width: 50%;
    }

    aside{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2em;

        h1{
            font-size: ${values.largeText};
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
                    <article key={items}>
                        <p>
                            <span>{items.title}:</span>
                            {items.text}
                        </p>
                    </article>
                ))}

            <ToggleButton
                text={'Read More'}
                className={'read-more'}
            />
        </aside>
    </CriteriaDisplay>
  )
}

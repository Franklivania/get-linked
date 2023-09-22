import styled from "styled-components"
import { colors, values } from "../../StyledComponents/Styles"
import think from '/images/think.svg'
import data from '../../../data/FAQ.json'

const FAQDisplay = styled.section`
    position: relative;
    width: 100%;
    padding: 2em 4em;
    display: flex;
    align-items: center;
    gap: 6em;
    border-bottom: 0.002em solid ${colors.borderColor};

    img{
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
            font-family: ${values.bgFont};
            line-height: 1;

            span{
                color: ${colors.pink}
            }
        }

        details{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1em;
            border-bottom: 0.002em solid ${colors.pink};
            cursor: pointer;
            
            summary{
                display: flex;
                align-items: center;
                justify-content: space-between;
                /* font-size: ${values.smallText}; */
                padding: 0.3em 0;
                transition: margin .3s ease-out;
                
                i{
                    color: ${colors.pink};
                    transition: .3s ease-out;
                }
            }

            &[open] summary{
                margin-bottom: 1em;

                i{
                    transform: rotate(45deg);
                }
            }
        }
    }
`

export default function FAQ() {
  return (
    <FAQDisplay id="faq">
        <aside>
            <h1>
                Frequently Asked <br />
                <span>Questions</span>
            </h1>

            <p>
                We got answers to the questions that you might
                want to ask about getlinked Hackathon 1.0
            </p>


            {data.map((items, index) => (
                <details key={index}>
                    <summary>
                        {items.question}
                        <i className="fa-solid fa-plus"></i>
                    </summary>
                    <p>{items.answer}</p>
                </details>
            ))}
        </aside>

        <img src={think} alt="think" />
    </FAQDisplay>
  )
}

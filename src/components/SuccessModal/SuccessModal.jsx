import styled from "styled-components"
import success from '/images/congrats.svg'
import wink from '/icons/wink.svg'
import { colors, devices, mixins, values } from "../../StyledComponents/Styles"
import ToggleButton from "../ToggleButton/ToggleButton"

const SuccessDisplay = styled.main`
    position: fixed;
    width: ${values.width};
    height: ${values.height};
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(21, 14, 40, 0.9);
    z-index: 9999;

    section{
        position: relative;
        width: 50%;
        padding: 3em;
        border: 0.01em solid ${colors.pink};
        border-radius: ${values.smallRadius};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;
        color: ${colors.white};
        text-align: center;
        background: rgba(255, 255, 255, 0.014);

        @media screen and ${devices.tablet} {
            width: 80%;
        }

        @media screen and ${devices.mobile} {
            width: 95%;
        }

        #success{
            width: 50%;
        }

        .bk-btn{
            width: 100%;
            background: ${mixins.gradient};
        }
    }

`

export default function SuccessModal({closeModal}) {
  return (
    <SuccessDisplay>
        <section>
            <img src={success} alt="happy boy with green tick" id="success" />

            <h1>
                Congratulations <br />
                you have successfully Registered!
            </h1>

            <p>
                Yes, it was easy and you did it!
                check your mail box for next step
                <img src={wink} alt="wink emoji" />
            </p>

            <ToggleButton
                text={'Back'}
                className={'bk-btn'}
                onClick={closeModal}
            />
        </section>
    </SuccessDisplay>
  )
}

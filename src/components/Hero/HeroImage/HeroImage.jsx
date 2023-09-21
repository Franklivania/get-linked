import man from '/images/man-vr.svg'
import orb from '/images/orb.svg'
import matrix from '/images/matrix.svg'
import flare from '/images/flare.png'
import styled from 'styled-components'
import { values } from '../../../StyledComponents/Styles'

const MainImage = styled.section`
    position: absolute;
    width: calc(${values.wkWidth} * 0.5);
    height: calc(${values.wkHeight} * 0.4);
    heigth: 100%; 
    bottom: -10%;
    right: 0;

    h1{
        font-size: ${values.largeText};

        #line{
            positon: absolute;
            width: 30%;
            bottom: 0;
            right: 0;
        }
    }
    
    img{
        position: absolute;
        width: 100%;
        height: 90%;
        top: 0;
        right: 0;
        object-fit: contain;
    }
`

export default function HeroImage() {
    return(
        <MainImage>
            <span>
                <img src={matrix} alt="matrix" id='matrix' />
                <img src={man} alt="person" id='man' />
                <img src={flare} alt="flare" id='flare' />
                <img src={orb} alt="orb" id='orb' />
            </span>          
        </MainImage>
    )
}
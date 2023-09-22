import { useLocation } from "react-router-dom"
import { styled } from "styled-components";
import { colors, values } from "../../StyledComponents/Styles";


const PageContent = styled.main`
    width: max-content;
    padding: .5em 1em;
    color: ${colors.white};
    font-family: ${values.font};
    font-size: ${values.text};
    border-radius: ${values.smallRadius};
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;

    &:hover{
        color: ${colors.pink};
    }

    &.activeLink{
        background: -webkit-linear-gradient(-70deg, #903AFF 50%, #FE34B9 0%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export default function PageButton({title, icon, image, id, className, link}) {
    const location = useLocation()
    const isActive = location.pathname === link

    function handleNavigate(){
        window.location.href = link
    }
    
    return (
        <PageContent id={id} className={`${className} ${isActive ? 'activeLink' : ''}`} onClick={handleNavigate}>
            {icon && <i className={icon}></i>}
            {image && <img src={image} alt={title} title={title} /> }
            {title}
        </PageContent>
    )
}

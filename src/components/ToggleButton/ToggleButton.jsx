import { styled } from 'styled-components'
import { values, colors } from '../../StyledComponents/Styles'

const TouchButton = styled.button`
    width: max-content;
    border: none;
    outline: none;
    font-size: ${values.text};
    font-family: ${values.font};
    background: transparent;
    padding: .7em 1em;
    color: ${colors.white};
    cursor: pointer;
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: center;
    border-radius: ${values.smallRadius};
`

export default function ToggleButton({title, text, icon, onClick, className, disabled, children, image, isActive}) {
    return(
        <TouchButton
            disabled={disabled}
            onClick={onClick}
            className={`${className} ${isActive ? 'activated' : ''} ${disabled ? 'disable': ''}`}
        >
            {icon && <i className={icon}></i>}
            {text}
            {image && <img src={image} alt={title} title={title} />}
            {children}
        </TouchButton>
    )
}
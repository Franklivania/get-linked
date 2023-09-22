import '../App.scss'

const breakpoints = {
    mobile: "600px",
    tablet: "1000px",
    desktop: "1001px"
}

export const devices = {
    mobile: `(max-width: ${breakpoints.mobile})`,
    tablet: `(max-width: ${breakpoints.tablet})`,
    desktop: `(min-width: ${breakpoints.desktop})`
}

export const colors = {
    black: "#222222",
    white: "#ffffff",
    dkPurple: "#150E28",
    purple: "#903AFF",
    pink: "#D434FE",
    borderColor: 'hsla(0, 0%, 100%, 0.18)',
}

export const mixins = {
    gradient: `linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)`,
}

export const values = {
    height: "100vh",
    width: "100%",
    wkHeight: "100em",
    wkWidth: "100em",
    radius: "50%",
    borderRadius: "1em",
    smallRadius: ".5em",
    text: "1em",
    smallText: ".5em",
    largeText: "2.5em",
    extraLargeText: "5em",
    font: 'Montserrat',
    bgFont: 'AC Display Bold',
}
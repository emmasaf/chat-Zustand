import {Typography} from "antd";

export const Text = (props) => {
    const {text, color = 'black', isTitle=false, fontSize, lineHeight} = props

    const titleStyles = {
        fontWeight: "600",
        fontSize: '14px',
        lineHeight: '18px',
        color
    }
    const simpleStyles = {
        fontWeight: "400",
        fontSize,
        lineHeight,
        color
    }
    return (
        <Typography
            style={isTitle ? titleStyles : simpleStyles}
            variant="body2"
            component="p">
            {text}
        </Typography>)
};
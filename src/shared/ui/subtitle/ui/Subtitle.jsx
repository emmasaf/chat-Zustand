import {Typography} from "antd";

export const Subtitle = (props) => {
    const {text, color = '#666668', fontSize = '12px', lineHeight = '15px'} = props

    const styles = {
        fontWeight: "400",
        fontSize,
        lineHeight,
        color
    }
    return <Typography style={styles} variant="body2" component="p">{text}</Typography>
};
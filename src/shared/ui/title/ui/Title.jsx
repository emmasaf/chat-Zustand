import {Typography} from "antd";

export const Title = (props) => {
    const {text,color='black'} = props

    const styles = {
        fontWeight: "600",
        fontSize: '14px',
        lineHeight: '18px',
        color
    }
    return <Typography style={styles} variant="body2" component="p">{text}</Typography>
};
import {
    messageBoxStyles,
    containerStyles,
    detailStyles,
    messageTextStyles,
    bubbleTipStyles,
    titleStyles
} from "./styles.js";

import {formatTime} from "../../../lib";
import {Subtitle} from "../../subtitle";

export const UserMessage = (props) => {
    const {date, message, isFirst = true} = props
    const time = formatTime(date)
    return (
        <div style={containerStyles}>
            <div style={messageBoxStyles}>
                <div style={titleStyles}>
                    <Subtitle text={message} {...messageTextStyles}/>
                </div>
                <div style={detailStyles}>
                    <Subtitle text={time} fontSize='12px' color='white'/>
                    <img src="/images/check.png" alt="status"/>
                </div>
                {isFirst && <img style={bubbleTipStyles} src="/images/bubble-tip.png" alt="tip"/>}
            </div>
        </div>
    )
}
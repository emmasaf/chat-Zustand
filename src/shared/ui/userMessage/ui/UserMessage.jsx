import {
    messageBoxStyles,
    containerStyles,
    detailStyles,
    messageTextStyles,
    bubbleTipStyles,
    titleStyles, editDeleteStyles
} from "./styles.js";

import {formatTime} from "../../../lib";
import {Text} from "../../text";
import {EditButton,DeleteButton} from "../../../../features";

export const UserMessage = (props) => {
    const {date, message, isFirst = true} = props
    const time = formatTime(date)
    return (
        <div style={containerStyles}>
            <div style={editDeleteStyles}>
                <EditButton/>
                <DeleteButton/>
            </div>
            <div style={messageBoxStyles}>
                <div style={titleStyles}>
                    <Text text={message} {...messageTextStyles}/>
                </div>
                <div style={detailStyles}>
                    <Text text={time} fontSize='12px' color='white'/>
                    <img src="/images/check.png" alt="status"/>
                </div>
                {isFirst && <img style={bubbleTipStyles} src="/images/bubble-tip.png" alt="tip"/>}
            </div>
        </div>
    )
}
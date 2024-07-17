import  './animation.css';
import {
    messageBoxStyles,
    containerStyles,
    detailStyles,
    messageTextStyles,
    bubbleTipStyles,
    textStyles, titleStyles
} from "./styles.js";

import {formatTime} from "../../../lib";
import {Text} from "../../text";
import {UserIcon} from "../../userIcon";

export const BotMessage = (props) => {
    const {date, message, isFirst = true} = props
    const time = formatTime(new Date(date))

    return (
        <div style={containerStyles} className='container'>
            <UserIcon/>
            <div style={messageBoxStyles}>
                <div style={textStyles}>
                    <Text isTitle text='Bot'/>
                    <div style={titleStyles}>
                        <Text text={message} {...messageTextStyles}/>
                    </div>
                </div>
                <div style={detailStyles}>
                    <Text text={time} fontSize='12px' color='black'/>
                    <img src="/images/check.png" alt="status"/>
                </div>
                {isFirst && <img style={bubbleTipStyles} src="/images/top-vector-tip.png" alt="tip"/>}
            </div>
        </div>
    )
}
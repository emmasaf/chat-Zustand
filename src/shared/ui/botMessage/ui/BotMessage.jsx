import {
    messageBoxStyles,
    containerStyles,
    detailStyles,
    messageTextStyles,
    bubbleTipStyles,
    textStyles, titleStyles
} from "./styles.js";

import {formatTime} from "../../../lib";
import {Subtitle} from "../../subtitle";
import {Title} from "../../title";
import {UserIcon} from "../../userIcon/index.js";

export const BotMessage = (props) => {
    const {date, message, isFirst = true} = props
    const time = formatTime(date)

    return (
        <div style={containerStyles}>
            <UserIcon image='/images/avatar-with-online-indicator.png'/>
            <div style={messageBoxStyles}>
                <div style={textStyles}>
                    <Title text='Bot'/>
                    <div style={titleStyles}>
                        <Subtitle text={message} {...messageTextStyles}/>
                    </div>
                </div>
                <div style={detailStyles}>
                    <Subtitle text={time} fontSize='12px' color='black'/>
                    <img src="/images/check.png" alt="status"/>
                </div>
                {isFirst && <img style={bubbleTipStyles} src="/images/top-vector-tip.png" alt="tip"/>}
            </div>
        </div>
    )
}
import {
    messageBoxStyles,
    containerStyles,
    detailStyles,
    messageTextStyles,
    bubbleTipStyles,
    titleStyles, editDeleteStyles, editStatusStyles
} from "./styles.js";

import {formatTime} from "../../../lib";
import {Text} from "../../text";
import {EditButton, DeleteButton} from "../../../../features";
import {MESSAGE_TYPE_IMAGE, MESSAGE_TYPE_TEXT} from "../../../consts";

export const UserMessage = (props) => {
    const {date, message, isFirst = true, id, editStatus, type} = props
    const time = formatTime(new Date(date))

    return (
        <div style={containerStyles}>
            <div style={editDeleteStyles}>
                <EditButton type={type} message={message} id={id}/>
                <DeleteButton id={id}/>
            </div>
            <div style={messageBoxStyles}>
                <div style={titleStyles}>
                    {type === MESSAGE_TYPE_TEXT && <Text text={message} {...messageTextStyles}/>}
                    {type === MESSAGE_TYPE_IMAGE && <img alt='uploaded-img' src={message} height='50'/>}
                </div>
                <div style={detailStyles}>
                    {editStatus && (
                        <div style={editStatusStyles}>
                            <Text text='edited' fontSize='10px' color='white'/>
                        </div>
                    )}
                    <Text text={time} fontSize='12px' color='white'/>
                    <img src="/images/check.png" alt="status"/>
                </div>
                {isFirst && <img style={bubbleTipStyles} src="/images/bubble-tip.png" alt="tip"/>}
            </div>
        </div>
    )
}
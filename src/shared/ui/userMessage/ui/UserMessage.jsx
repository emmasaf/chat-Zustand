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
import {EditButton,DeleteButton} from "../../../../features";

export const UserMessage = (props) => {
    const {date, message, isFirst = true,id,editStatus} = props
    const time = formatTime(new Date(date))

    return (
        <div style={containerStyles}>
            <div style={editDeleteStyles}>
                <EditButton message={message} id={id}/>
                <DeleteButton id={id}/>
            </div>
            <div style={messageBoxStyles}>
                <div style={titleStyles}>
                    <Text text={message} {...messageTextStyles}/>
                </div>
                <div style={detailStyles}>
                    {editStatus &&(
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
import {buttonStyles} from "./styles.js";
import {useChatStore} from "../../../shared/zustand";
import {Message} from "../../../shared/models";

export const SendButton = (props) => {
    const {active = false, isDisabled = true, messageText, onClick} = props
    const {addMessage, editProps, updateMessage,setEditProps} = useChatStore();

    const status = active ? 'active' : 'disabled'

    const handleClick = () => {
        const message = new Message(Date.now(),false,messageText,'user',new Date().toISOString())

        if (editProps?.id) {
            updateMessage(editProps.id,messageText)
            setEditProps(null)
        } else {
            setTimeout(() => {
                const botMessage = new Message(Date.now(),false,'Hello World','bot',new Date().toISOString())
                addMessage(botMessage);
            }, 2000);
            addMessage(message);
        }
        onClick()
    };
    return (
        <button disabled={isDisabled} style={buttonStyles} onClick={handleClick}>
            <img src={`/images/send-icon-${status}.png`} alt='send-icon'/>
        </button>
    )
}
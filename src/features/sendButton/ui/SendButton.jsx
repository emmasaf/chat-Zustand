import {buttonStyles} from "./styles.js";
import {useChatStore} from "../../../shared/zustand";
import {Message} from "../../../shared/models";

export const SendButton = (props) => {
    const {active = false, isDisabled = true, messageText} = props
    const {addMessage, editProps, updateMessage, setEditProps} = useChatStore();

    const status = active ? 'active' : 'disabled'

    const handleClick = () => {
        const message = new Message(false, messageText, 'user')

        if (editProps?.id) {
            updateMessage(editProps.id, messageText)
            setEditProps(null)
        } else {
            addMessage(message);

            setTimeout(() => {
                const botMessage = new Message(false, 'Hello World', 'bot')
                addMessage(botMessage);
            }, 1000);

        }
    };
    return (
        <button disabled={isDisabled} type='submit' style={buttonStyles} onClick={handleClick}>
            <img src={`/images/send-icon-${status}.png`} alt='send-icon'/>
        </button>
    )
}